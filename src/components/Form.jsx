import Link from 'next/link';

const Form = ({ type, post, setPost, submit, handleSubmit }) => {
  console.log(post);
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p>
        {type} and share what you want to say to the AI with the world through
        this app 📸✨🌎
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your prompt or questions for the AI here...'
            required={true}
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tags{' '}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea)
            </span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#tag'
            required={true}
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href={'/'} className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submit}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submit ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
