import React, { useState, useEffect } from 'react';
import CustomNavbar from '../components/CustomNavbar';
import FooterComponent from '../components/FooterComponent';
import { useParams } from 'react-router-dom';

const BlogPage = ({ id }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then(response => response.json())
      .then(data => setBlog(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CustomNavbar />
      <section className="bg-white">
        <div className="container px-5 lg:px-40 py-16">
          <div className="flex justify-center mt-10">
            <img
              className="object-none object-center w-full h-72 rounded-xl"
              src={blog.imageURL}
              alt={blog.title}
            />
          </div>
          <div className="max-w-lg lg:ml-10 mt-5">
            <h1 className="text-xl font-semibold text-gray-800 lg:text-xl mt-2">{blog.title}</h1>
          </div>
          <div className="mt-5 lg:ml-10">
            <p>{blog.longDescription}</p>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
};


export default BlogPage;