import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';

const openai = new OpenAI();

export async function POST({ request }) {
  try {
    // Save the incoming audio file temporarily
    const audioBuffer = await request.arrayBuffer();
    const audioFilePath = path.join(process.cwd(), 'temp_audio.mp3');
    await fs.promises.writeFile(audioFilePath, Buffer.from(audioBuffer));

    // Use the Whisper API for transcription
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(audioFilePath),
      model: 'whisper-1',
    });

    // Delete the temporary file after transcription
    await fs.promises.unlink(audioFilePath);

    return new Response(JSON.stringify({ transcription: transcription.text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error transcribing audio:', error);
    return new Response(JSON.stringify({ message: 'Failed to transcribe audio.' }), {
      status: 500,
    });
  }
}
