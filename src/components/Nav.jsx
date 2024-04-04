'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getProviders();
      setProviders(response);
    })();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href={'/'} className='flex gap-2 flex-center'>
        <Image
          src='assets/images/logo.svg'
          alt='Logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Gausspy</p>
      </Link>

      {/* Desktop View */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href={'/create-prompt'} className='black_btn'>
              Create Post
            </Link>
            <Link href={'/'} className='outline_btn' onClick={signOut}>
              Sign Out
            </Link>
            <Link href={'/profile'}>
              <Image
                src={session?.user.image}
                alt='Profile'
                width={37}
                height={37}
                className='rounded-full border 1px border-black'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile View */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              alt='Profile'
              width={37}
              height={37}
              className='rounded-full'
              onClick={() => {
                setCollapse((prev) => !prev);
              }}
            />

            {collapse && (
              <div className='dropdown'>
                <Link
                  href={'/profile'}
                  className='dropdown_link'
                  onClick={() => setCollapse(false)}
                >
                  My Profile
                </Link>
                <Link
                  href={'/create-prompt'}
                  className='dropdown_link'
                  onClick={() => setCollapse(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setCollapse(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
