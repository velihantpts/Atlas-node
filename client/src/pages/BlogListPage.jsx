import React, { useState, useEffect } from 'react';

import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);
  const handleEdit = (blogId) => {
 
    navigate(`/blog/edit/${blogId}`);
  };


  const handleDelete = (blogId) => {
    fetch(`/api/blogs/${blogId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          // Silme işlemi başarılı
          setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== blogId));
        } else {
          // Silme işlemi başarısız
          console.error('Blog silinirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Blog silinirken bir hata oluştu:', error);
      });
  };


  return (
    <div>
      <Sidebar />
      <div className="mt-20 ml-80 px-20 w-[1000]">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Başlık
                </th>
                <th scope="col" className="px-6 pl-11 py-3">
                  Image URL
                </th>
                <th scope="col" className="px-6 py-3">
                  Kısa Acıklama
                </th>
                <th scope="col" className="px-6 py-3">
                  Uzun Acıklama
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr className="bg-white dark:bg-gray-800" key={blog._id}>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {blog.title}
                  </td>
        
                  <td className="px-6 py-4 text-sm">{blog.imageURL}</td>
                  <td className="px-6 py-4">{blog.longDescription}</td>
                  <td className="px-6 py-4">{blog.shortDescription}</td>
                  <td className="px-6 py-4 m-2">
                    <button 
                    onClick={() => handleEdit(blog._id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 mr-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Düzenle
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BlogListPage;
