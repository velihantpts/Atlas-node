import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';


function MekanListPage() {
  const [mekans, setMekans] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/api/restaurants')
      .then(response => response.json())
      .then(data => setMekans(data));
  }, []);
  const handleEdit = (mekanId) => {
 
    navigate(`/mekan/edit/${mekanId}`);
  };
  const handleDelete = (mekanId) => {
    fetch(`/api/mekan/${mekanId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          // Silme işlemi başarılı
          setMekans(prevMekans => prevMekans.filter(mekan => mekan._id !== mekanId));
        } else {
          // Silme işlemi başarısız
          console.error('Mekan silinirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Mekan silinirken bir hata oluştu:', error);
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
                  Mekan İsmi
                </th>
                <th scope="col" className="px-6 pl-11 py-3">
                  Mekan Acıklaması
                </th>
                <th scope="col" className="px-6 py-3">
                  Mekan Resmi
                </th>
         
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {mekans.map((mekan) => (
                <tr className="bg-white dark:bg-gray-800" key={mekan._id}>

                  <td className="px-6 py-4">{mekan.title}</td>
                  <td className="px-6 py-4">{mekan.cardDescription}</td>
                  <td className="px-6 py-4">{mekan.cardImage}</td>
                
                  <td className="px-6 py-4">
                    <button 
                    onClick={() => handleEdit(mekan._id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 mr-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Düzenle
                    </button>
                    <button 
                     onClick={() => handleDelete(mekan._id)}
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

export default MekanListPage;
