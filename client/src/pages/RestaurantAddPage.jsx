import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

function RestaurantAddPage() {
  const [formData, setFormData] = useState({
    title: '',
    cardImage: '',
    cardDescription: '',
    cardImage2: '',
    cardImage3: '',
    detail: '',
    longDescription: '',
    options: '',
    options2: '',
    options3: '',
    options4: ''

  });

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await fetch('/api/restaurants');
      const data = await response.json();
      setRestaurants(data);
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
      const response = await fetch('/api/restaurants', {
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
          <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Restaurant ismi</label>
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
          <label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Restaurant Resmi</label>
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

     <label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Detay</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
      <input
      type="text"
      name="detail"
      id="detail"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required=""
      value={formData.detail}
      onChange={handleChange}
    /> 

     <label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Uzun Açıklama</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
      <input
      type="text"
      name="longDescription"
      id="longDescription"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required=""
      value={formData.longDescription}
      onChange={handleChange}
    />  
    
    <label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Opsiyon 1</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
      <input
      type="text"
      name="options"
      id="options"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required=""
      value={formData.options}
      onChange={handleChange}
    /> 
    
    <label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Opsiyon 2</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
      <input
      type="text"
      name="options2"
      id="options2"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required=""
      value={formData.options2}
      onChange={handleChange}
    />       

<label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Opsiyon 3</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
      <input
      type="text"
      name="options3"
      id="options3"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required=""
      value={formData.options3}
      onChange={handleChange}
    /> 

<label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Opsiyon 4</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
      <input
      type="text"
      name="options4"
      id="options4"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      required=""
      value={formData.options4}
      onChange={handleChange}
    />       
      </div>
  </form>
          </div>
          </div>
       </div>
    </div>
        </div>
      )
}

export default RestaurantAddPage





