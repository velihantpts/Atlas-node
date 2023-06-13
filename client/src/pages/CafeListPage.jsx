import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';


function CafeListPage() {
  const [cafes, setCafes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/api/cafes')
      .then(response => response.json())
      .then(data => setCafes(data));
  }, []);
  const handleEdit = (cafeId) => {
 
    navigate(`/cafe/edit/${cafeId}`);
  };
  const handleDelete = (cafeId) => {
    fetch(`/api/cafe/${cafeId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          // Silme işlemi başarılı
          setCafes(prevCafes => prevCafes.filter(cafe => cafe._id !== cafeId));
        } else {
          // Silme işlemi başarısız
          console.error('Cafe silinirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Cafe silinirken bir hata oluştu:', error);
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
                  Cafe İsmi
                </th>
                <th scope="col" className="px-6 pl-11 py-3">
                  Cafe Acıklaması
                </th>
                <th scope="col" className="px-6 py-3">
                  Cafe Resmi
                </th>
         
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cafes.map((cafe) => (
                <tr className="bg-white dark:bg-gray-800" key={cafe._id}>

                  <td className="px-6 py-4">{cafe.title}</td>
                  <td className="px-6 py-4">{cafe.cardDescription}</td>
                  <td className="px-6 py-4">{cafe.cardImage}</td>
                
                  <td className="px-6 py-4">
                    <button 
                    onClick={() => handleEdit(cafe._id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 mr-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Düzenle
                    </button>
                    <button 
                     onClick={() => handleDelete(cafe._id)}
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

export default CafeListPage;
