'use client';

import { useState, useEffect } from 'react';
import PromptCardList from './PromptCardList';

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      
      setPosts(data);
    })();
  }, []);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          className='search_input peer'
          value={searchText}
          onChange={handleSearchChange}
          required={true}
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
