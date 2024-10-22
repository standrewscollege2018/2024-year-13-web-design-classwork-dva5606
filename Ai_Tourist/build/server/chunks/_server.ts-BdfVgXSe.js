import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: "" });
let questions = [];
let responses = [];
let frame = 0;
async function callgpt(question, base64Image) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `${question}`
          },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${base64Image}`
            }
          }
        ]
      }
    ],
    max_tokens: 300
  });
  const answer = completion.choices[0].message.content;
  if (answer) {
    responses.push(answer);
    return answer;
  } else {
    console.error("No answer received from OpenAI.");
    return "No valid response was returned.";
  }
}
async function genQuestion(question) {
  frame += 1;
  const userQuestion = question;
  questions.push(userQuestion);
  let messText;
  if (frame !== 1) {
    messText = "Hello ChatGPT, please try to answer within 2-3 sentences where possible. You have been asked ";
    for (let i = 0; i < questions.length - 1; i++) {
      messText += questions[i] + ", ";
    }
    messText += "' and have answered each with ";
    for (let j = 0; j < responses.length; j++) {
      messText += responses[j] + " ";
    }
    messText += "Please answer the current question of " + userQuestion;
  } else {
    messText = userQuestion;
  }
  return messText;
}
async function askQuestion(question, base64String) {
  const altQuestion = await genQuestion(question);
  return callgpt(altQuestion, base64String);
}
async function POST({ request }) {
  try {
    const { question, base64Image } = await request.json();
    const answer = await askQuestion(question, base64Image);
    return new Response(JSON.stringify({ answer }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response(JSON.stringify({ message: "Failed to process request." }), {
      status: 500
    });
  }
}

export { POST };
//# sourceMappingURL=_server.ts-BdfVgXSe.js.map
