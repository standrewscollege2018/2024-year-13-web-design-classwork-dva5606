import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST({ request }) {
  try {
    const audioBuffer = await request.arrayBuffer();
    const audioFilePath = path.join(process.cwd(), 'recording.mp3');

    await writeFile(audioFilePath, Buffer.from(audioBuffer));

    return new Response(JSON.stringify({ message: 'Audio saved successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error saving audio:', error);
    return new Response(JSON.stringify({ message: 'Failed to save audio.' }), { status: 500 });
  }
}
