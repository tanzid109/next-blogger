import Link from 'next/link';
import React from 'react';

const Home = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return (
    <div>
      <div>
        <h1 className='text-center font-bold text-3xl my-4 text-teal-600'>Welcome to next blogger</h1>
      </div>
      <div className='grid lg:grid-cols-5  mx-auto w-11/12 gap-5 my-5'>
        {posts.slice(0, 30).map((post) => (
          <div key={post.id} className="p-2 text-center shadow-lg hover:text-teal-800 border-b-2 border-teal-600">
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
