import Prompt from '@lib/models/Prompt';
import { connectDB } from '@lib/utils/database';

export const GET = async (req, { params }) => {
  try {
    await connectDB();

    const prompts = await Prompt.find({ creator: params.id }).populate('creator');

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Failed to fetch prompts', { status: 500 });
  }
};
