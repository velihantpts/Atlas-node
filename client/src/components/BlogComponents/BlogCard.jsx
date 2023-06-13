import React from 'react';
import { Link } from 'react-router-dom';
const BlogCard = ({ title, imageUrl, shortDescription, onClick, linkUrl }) => {
  
  return (
    <div className='mb-10'>
      <img className='object-cover object-center w-full h-64 rounded-lg lg:h-80' src={imageUrl} alt={title} />
      <div className='mt-8'>
        <h1 className='mt-4 text-xl font-semibold text-gray-800'>{title}</h1>
        <p className='mt-2 text-gray-500 dark:text-gray-400'>{shortDescription}</p>
        <div className='flex items-center justify-between mt-4'>
        <Link to={linkUrl} className='inline-block text-blue-500 underline hover:text-blue-400'>
  Daha fazlası  
</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
