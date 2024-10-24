/**
This server file takes the audio blob and will convert it to text.
This is done by storing it temporarily as a mp3 file and then sending a request
to OpenAI using their whisper-1 model to generate the text from the audio.
This text will then be returned to the main +page.svelte file
 */

// Imports a few modules for file reading and writing as well as the openai module
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';

// Sets api key
const openai = new OpenAI({ apiKey: '' });

// Function that handles incoming post requests to this server file
export async function POST({ request }) {
  try {
    // Obtains audio data from the post request
    const audioBuffer = await request.arrayBuffer();

    // Converts ArrayBuffer to Uint8Array
    const audioBufferUint8Array = new Uint8Array(audioBuffer);

    // Defines the file path to temporarily store the audio data in the current working directory
    const audioFilePath = path.join(process.cwd(), 'temp_audio.mp3');

    // writes the audio data (Uint8Array) to the file at the specified path
    await fs.promises.writeFile(audioFilePath, audioBufferUint8Array);

    // Utilizes the OpenAI transcription whisper model
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(audioFilePath),
      model: 'whisper-1',
    });

    // Deletes the temporary audio file
    await fs.promises.unlink(audioFilePath);

    // The resulting transcription is then returned as a JSON response
    return new Response(JSON.stringify({ transcription: transcription.text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  // If anything fails, the error will be caught and a message displayed as to what happened
  } catch (error) {
    console.error('Error transcribing audio:', error);
    return new Response(JSON.stringify({ message: 'Failed to transcribe audio.' }), {
      status: 500,
    });
  }
}
