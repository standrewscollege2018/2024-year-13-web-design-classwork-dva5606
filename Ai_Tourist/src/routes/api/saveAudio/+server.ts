import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST({ request }) {
  try {
    // Get the audio buffer from the request
    const audioBuffer = await request.arrayBuffer();

    // Convert ArrayBuffer to Uint8Array
    const audioBufferUint8Array = new Uint8Array(audioBuffer);

    // Define the path to save the audio file
    const audioFilePath = path.join(process.cwd(), 'recording.mp3');

    // Write the audio file using Buffer from Uint8Array
    await writeFile(audioFilePath, audioBufferUint8Array);

    return new Response(JSON.stringify({ message: 'Audio saved successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error saving audio:', error);
    return new Response(JSON.stringify({ message: 'Failed to save audio.' }), { status: 500 });
  }
}
