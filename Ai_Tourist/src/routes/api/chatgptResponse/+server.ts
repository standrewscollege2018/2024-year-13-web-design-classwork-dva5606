import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: '' }); // Replace with your API key
let questions: string[] = [];
let responses: string[] = [];
let frame = 0;

async function callgpt(question: string, base64Image: string) {
  // Send and wait for a response from ChatGPT
  const completion = await openai.chat.completions.create({
    model: 'gpt-4-turbo',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `${question}`,
          },
          {
            type: 'image_url',
            image_url: {
              url: `data:image/jpeg;base64,${base64Image}`,
            },
          },
        ],
      },
    ],
    max_tokens: 300,
  });

  // Receive the answer from ChatGPT and return it
  const answer = completion.choices[0].message.content;
  if (answer) { // Check if answer is not null or undefined
    responses.push(answer);
    return answer; // Return the answer if it's valid
  } else {
    console.error('No answer received from OpenAI.');
    return 'No valid response was returned.'; // Return a default message or handle the error
  }
}
    
async function genQuestion(question: string) {
  frame += 1;
  const userQuestion = question;

  questions.push(userQuestion);

  let messText: string;

  if (frame !== 1) {
    messText = 'Hello ChatGPT, please try to answer within 2-3 sentences where possible. You have been asked ';
    for (let i = 0; i < questions.length - 1; i++) {
      messText += questions[i] + ', ';
    }
    messText += "' and have answered each with ";
    for (let j = 0; j < responses.length; j++) {
      messText += responses[j] + ' ';
    }
    messText += 'Please answer the current question of ' + userQuestion;
  } else {
    messText = userQuestion;
  }

  return messText;
}

async function askQuestion(question: string, base64String: string) {
  const altQuestion = await genQuestion(question);
  return callgpt(altQuestion, base64String);
}

// The exported POST function to handle requests
export async function POST({ request }) {
  try {
    const { question, base64Image } = await request.json(); // Expecting a JSON body with question and base64Image

    const answer = await askQuestion(question, base64Image);

    return new Response(JSON.stringify({ answer }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error handling request:', error);
    return new Response(JSON.stringify({ message: 'Failed to process request.' }), {
      status: 500,
    });
  }
}
