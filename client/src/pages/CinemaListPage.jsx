import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';


function CinemaListPage() {
  const [cinemas, setCinemas] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/api/cinemas')
      .then(response => response.json())
      .then(data => setCinemas(data));
  }, []);
  const handleEdit = (cinemaId) => {
 
    navigate(`/cafe/edit/${cinemaId}`);
  };
  const handleDelete = (cinemaId) => {
    fetch(`/api/cinema/${cinemaId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          // Silme işlemi başarılı
          setCinemas(prevCinemas => prevCinemas.filter(cinema => cinema._id !== cinemaId));
        } else {
          // Silme işlemi başarısız
          console.error('Cinema silinirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Cinema silinirken bir hata oluştu:', error);
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
                  Cinema İsmi
                </th>
                <th scope="col" className="px-6 pl-11 py-3">
                  Cinema Acıklaması
                </th>
                <th scope="col" className="px-6 py-3">
                  Cinema Resmi
                </th>
         
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cinemas.map((cinema) => (
                <tr className="bg-white dark:bg-gray-800" key={cinema._id}>

                  <td className="px-6 py-4">{cinema.title}</td>
                  <td className="px-6 py-4">{cinema.cardDescription}</td>
                  <td className="px-6 py-4">{cinema.cardImage}</td>
                
                  <td className="px-6 py-4">
                    <button 
                    onClick={() => handleEdit(cinema._id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 mr-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Düzenle
                    </button>
                    <button 
                     onClick={() => handleDelete(cinema._id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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

export default CinemaListPage;
