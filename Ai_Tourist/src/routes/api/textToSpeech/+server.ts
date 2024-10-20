/**
Takes in the contents of the message from the +page.svelte file and then translates it
into audio. This is done by Open Ai's tts-1 model which takes in text and will return
and audio file. This audio file is then returned as base64
 */

// Imports a few modules
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import OpenAI from 'openai';

// Sets api key
const openai = new OpenAI({apiKey: ''});

// Handles the incoming POST requests
export const POST: RequestHandler = async ({ request }) => {

  // The text is obtained from the POST request
  const { text } = await request.json();

  // Validates the test to ensure it's not null
  if (!text) {
    throw error(400, 'Text input is required');
  }

  try {
    // Utilizes OpenAI tts-1 model to generate speech
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: text,
    });

    // The mp3 audio object is then converted into an arrayBuffer to a buffer object
    const buffer = Buffer.from(await mp3.arrayBuffer());
    // Converts to base64 to make the file easier to send back via JSON
    const audioBase64 = buffer.toString('base64');

    // Audio is returned as base64
    return json({ audio: audioBase64 });
  
  // If any issues arise in the try statement, the error will be caught and a message displayed
  } catch (err) {
    console.error('Error creating audio:', err);
    throw error(500, 'Internal Server Error');
  }
};
