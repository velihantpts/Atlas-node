import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';


function RestaurantListPage() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/api/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data));
  }, []);
  const handleEdit = (restaurantId) => {
 
    navigate(`/restaurant/edit/${restaurantId}`);
  };
  const handleDelete = (restaurantId) => {
    fetch(`/api/restaurant/${restaurantId}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          // Silme işlemi başarılı
          setRestaurants(prevRestaurants => prevRestaurants.filter(restaurant => restaurant._id !== restaurantId));
        } else {
          // Silme işlemi başarısız
          console.error('Restoran silinirken bir hata oluştu.');
        }
      })
      .catch(error => {
        console.error('Restoran silinirken bir hata oluştu:', error);
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
                  Restoran İsmi
                </th>
                <th scope="col" className="px-6 pl-11 py-3">
                  Restoran Acıklaması
                </th>
                <th scope="col" className="px-6 py-3">
                  Restoran Resmi
                </th>
         
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((resturant) => (
                <tr className="bg-white dark:bg-gray-800" key={resturant._id}>

                  <td className="px-6 py-4">{resturant.title}</td>
                  <td className="px-6 py-4">{resturant.cardDescription}</td>
                  <td className="px-6 py-4">{resturant.cardImage}</td>
                
                  <td className="px-6 py-4">
                    <button 
                    onClick={() => handleEdit(resturant._id)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 mr-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Düzenle
                    </button>
                    <button 
                     onClick={() => handleDelete(resturant._id)}
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

export default RestaurantListPage;
