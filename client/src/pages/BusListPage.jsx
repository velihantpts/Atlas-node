import React, { useState, useEffect } from 'react';

import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

function BusListPage() {
  const [bus, setBus] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/api/bus')
      .then(response => response.json())
      .then(data => setBus(data));
  }, []);
  const handleEdit = (busId) => {
 
    navigate(`/bus/edit/${busId}`);
  };


  const handleDelete = (busId) => {
    fetch(`/api/bus/${busId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          // Silme işlemi başarılı
          setBus(prevBus => prevBus.filter(bus => bus._id !== busId));
        } else {
          // Silme işlemi başarısız
          console.error('Otobüs silinirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Otobüs silinirken bir hata oluştu:', error);
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
                  Otobüs Numarası
                </th>
                <th scope="col" className="px-6 pl-11 py-3">
                  Resim
                </th>
                <th scope="col" className="px-6 py-3">
                  Rota
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {bus.map((bus) => (
                <tr className="bg-white dark:bg-gray-800" key={bus._id}>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {bus.bus_number}
                  </td>
        
                  <td className="px-6 py-4 text-sm">{bus.image}</td>
                  <td className="px-6 py-4">{bus.destination}</td>
                  <td className="px-6 py-4 m-2">
                    <button 
                    onClick={() => handleEdit(bus._id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 mr-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Düzenle
                    </button>
                    <button
                      onClick={() => handleDelete(bus._id)}
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

export default BusListPage;
