import { e as error, j as json } from "../../../../chunks/index.js";
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: "" });
const POST = async ({ request }) => {
  const { text } = await request.json();
  if (!text) {
    throw error(400, "Text input is required");
  }
  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: text
    });
    const buffer = Buffer.from(await mp3.arrayBuffer());
    const audioBase64 = buffer.toString("base64");
    return json({ audio: audioBase64 });
  } catch (err) {
    console.error("Error creating audio:", err);
    throw error(500, "Internal Server Error");
  }
};
export {
  POST
};
