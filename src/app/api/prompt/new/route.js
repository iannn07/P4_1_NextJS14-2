import Prompt from '@lib/models/Prompt';
import { connectDB } from '@lib/utils/database';

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  if (!userId || !prompt || !tag) {
    return new Response('Missing information', { status: 400 });
  }

  try {
    await connectDB();

    const newPrompt = await Prompt.create({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response('Failed to create a new prompt', { status: 500 });
  }
};
