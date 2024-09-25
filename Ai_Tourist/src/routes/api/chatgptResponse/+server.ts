import { OpenAI } from 'openai';
import type { RequestHandler } from '@sveltejs/kit';

const openai = new OpenAI({ apiKey: '', dangerouslyAllowBrowser: true });

let frame = 0;
const questions: string[] = [];
const responses: string[] = [];
const messTextBase = "Hello ChatGPT, please respond with 2-3 sentence responses. You have been asked '";

async function callGpt(question: string, base64Image: string) {
    const completion = await openai.chat.completions.create({
        model: 'gpt-4-turbo',
        messages: [
            {
                role: 'user',
                content: question
            },
            {
                type: 'image_url',
                image_url: {
                    url: `data:image/jpeg;base64,${base64Image}`
                }
            }
        ],
        max_tokens: 300
    });

    const answer = completion.choices[0].message.content;
    responses.push(answer);

    return answer;
}

async function genQuestion(question: string) {
    frame += 1;
    const userQuestion = question;

    questions.push(userQuestion);
    let messText = '';

    if (frame !== 1) {
        messText = messTextBase;
        for (let i = 0; i < questions.length - 1; i++) {
            messText += questions[i] + ",";
        }
        messText += "' and have answered each with ";
        for (let j = 0; j < responses.length; j++) {
            messText += responses[j];
        }
        messText += ` Please answer the current question of ${userQuestion}`;
    } else {
        messText = userQuestion;
    }

    return messText;
}

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { question, base64String } = await request.json();
        const altQuestion = await genQuestion(question);
        const response = await callGpt(altQuestion, base64String);

        return new Response(JSON.stringify({ answer: response }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
    }
};
