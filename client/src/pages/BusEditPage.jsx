import React,{useState,useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import { useParams, useNavigate } from 'react-router-dom';

const BusEditPage = ({ id }) => {
    const navigate = useNavigate();
  const [bus, setBus] = useState(null);
  const [bus_number, setBus_number] = useState('');
  const [image, setImage] = useState('');
  const [destination, setDestination] = useState('');





  useEffect(() => {
    fetch(`/api/blog/${id}`)
      .then(response => response.json())
      .then(data => {
        setBus(data);
        setBus_number(data.bus_number);
        setImage(data.image);
        setDestination(data.destination);
      });
  }, [id]);

  const handleSubmit = () => { // Değişiklik burada yapıldı
    const updatedBlog = {
        bus_number,
        image,
        destination
    };

    fetch(`/api/bus/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedBlog)
    })
      .then(response => {
        if (response.ok) {
          // Güncelleme işlemi başarılı
          navigate('/bus-list');
        } else {
          // Güncelleme işlemi başarısız
          console.error('Otobüs güncellenirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Otobüs güncellenirken bir hata oluştu:', error);
      });
  };

  return (

    <div className='ml-64 p-5 px-10'>
         <h1 className=' font-sans font-semibold   mt-10 pl-16 text-left w-full'>Otobüs Güncelle </h1>
        <Sidebar />
        <div class="  ">
   <div class="p-4">
       <div className='flex flex-col pt-5 pl-10 mb-20'>
          <div className='w-full  '>          
<form className='bg-gray-800 p-10 rounded-md' onSubmit={handleSubmit}>
  <div class="grid md:grid-cols-2 md:gap-6">
<div class="relative z-0 w-full mb-6 group">
<input
                    type="text"
                    name="bus_number"
                    id="bus_number"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=""
                    required=""
                    value={bus_number}
                    onChange={e => setBus_number(e.target.value)}
                  />
    <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad</label>
</div>
<div class="relative z-0 w-full mb-6 group">
<input
                    type="text"
                    name="image"
                    id="image"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=""
                    required=""
                    value={image}
                    onChange={e => setImage(e.target.value)}
                  />       
    <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Soyad</label>
</div>
</div>
{/* Selection tarzı secmeli olmalı daha sonra bakılmalı */}
  <div class="relative z-0 w-full mb-6 group">
  <input
                    type="text"
                    name="destination"
                    id="shortDescription"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=""
                    required=""
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                  />     
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ünvan</label>
  </div>



  <div className="w-full flex justify-center mt-3">
                  <button
                    type="submit"
                    onClick={handleSubmit} // Değişiklik burada yapıldı
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Güncelle
                  </button>
                </div>
 
</form>

          </div>

       </div>
   </div>
</div>
    </div>
  )
}

export default BusEditPage