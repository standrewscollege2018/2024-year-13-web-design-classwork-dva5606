import fs from "fs";
import path from "path";
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: "" });
async function POST({ request }) {
  try {
    const audioBuffer = await request.arrayBuffer();
    const audioBufferUint8Array = new Uint8Array(audioBuffer);
    const audioFilePath = path.join(process.cwd(), "temp_audio.mp3");
    await fs.promises.writeFile(audioFilePath, audioBufferUint8Array);
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(audioFilePath),
      model: "whisper-1"
    });
    await fs.promises.unlink(audioFilePath);
    return new Response(JSON.stringify({ transcription: transcription.text }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error transcribing audio:", error);
    return new Response(JSON.stringify({ message: "Failed to transcribe audio." }), {
      status: 500
    });
  }
}
export {
  POST
};
