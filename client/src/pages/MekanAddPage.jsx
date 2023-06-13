import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

function MekanAddPage() {
  const [formData, setFormData] = useState({
    title: '',
    cardImage: '',
    cardDescription: ''
  });

  const [mekans, setMekans] = useState([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await fetch('/api/mekans');
      const data = await response.json();
      setMekans(data);
    } catch (error) {
      console.log('Hata:', error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/mekans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Başarılı');
      } else {
        console.log('Başarısız');
      }
    } catch (error) {
      console.log('Try\'a girmedi');
    }
  };
    return (
        <div className='ml-64 p-5 px-10'>
             <h1 className=' font-sans font-semibold   mt-10 pl-16 text-left w-full'>Gelir Gider Sayfası</h1>
            <Sidebar />
            <div class="  ">
       <div class="p-4">
           <div className='flex flex-col pt-5 pl-10 mb-20'>
              <div className='w-full  '>            
      <form className='bg-gray-800 p-10 rounded-md' onSubmit={handleSubmit}>

      <div class="relative z-0 w-full mb-6 group">
      <input
      type="text"
      name="title"
      id="title"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required=""
      value={formData.title}
      onChange={handleChange}
    />
          <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mekan ismi</label>
      </div>
      



<div class="relative z-0 w-full mb-6 group">
<input
      type="text"
      name="cardDescription"
      id="cardDescription"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required=""
      value={formData.cardDescription}
      onChange={handleChange}
    />
          <label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mekan acıklaması</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
      <input
      type="text"
      name="cardImage"
      id="cardImage"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required=""
      value={formData.cardImage}
      onChange={handleChange}
    />      
          <label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mekan Resmi</label>
      </div>

      <div className='w-full flex justify-center mt-3'>
      <button type="submit" 
      onClick={handleSubmit}
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ekle</button>
      </div>
  </form>
          </div>
          </div>
       </div>
    </div>
        </div>
      )
}

export default MekanAddPage





