import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

const ContentBlogComponent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">Blog Yazıları</h1>
        </div>
        <hr className="my-8 border-gray-200 dark:border-gray-300" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog) => (
    <BlogCard
      key={blog._id}
      title={blog.title}
      shortDescription={blog.shortDescription}
      imageUrl={blog.imageURL}
      linkUrl={`/blog/${blog._id}`} // burada blogun id'sini URL'ye ekleyebilirsin
    />
))}
        </div>
      </div>
    </section>
  );
};

export default ContentBlogComponent;
