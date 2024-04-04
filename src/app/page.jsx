import Feed from '@components/Feed';
import { Suspense } from 'react';
import Loading from './loading';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Gausspy - AI Prompt Generator
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>Powered by Ian</span>
      </h1>
      <p className='desc text-center'>
        In the mystical realm of artificial intelligence, where neural networks
        dream in binary and algorithms sip digital tea, the sacred art of prompt
        engineering unfolds. Picture this: a wizardly coder, robe adorned with
        syntax, stands before a glowing terminal. Their incantations? Not
        spells, but carefully crafted prompts. 🧙‍♂️
      </p>

      <Suspense fallback={<Loading />}>
        <Feed />
      </Suspense>
    </section>
  );
};

export default Home;
