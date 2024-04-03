'use client';

import Form from '@components/Form';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const CreatePrompt = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  const createPrompt = async (e) => {
    e.preventDefault();

    setSubmit(true);

    try {
      const res = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user.id,
        }),
      });

      if (res.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmit(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submit={submit}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
