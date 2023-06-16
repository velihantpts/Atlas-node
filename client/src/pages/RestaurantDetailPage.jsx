import React, { useState, useEffect } from 'react';
import CustomNavbar from '../components/CustomNavbar';
import FooterComponent from '../components/FooterComponent';
import axios from 'axios';
import { SocialIcon } from 'react-social-icons';
import QRCode from 'qrcode.react'; // QR kod oluşturmak için qrcode.react kütüphanesini ekledik

const RestaurantDetailPage = ({ id }) => {
  const [restaurants, setRestaurant] = useState(null);
  const [showQRCode, setShowQRCode] = useState(false); // QR kodun görüntülenip görüntülenmeyeceğini tutan bir state ekledik

  useEffect(() => {
    axios
      .get(`/api/restaurant/${id}`)
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  if (!restaurants) {
    return <div>Loading...</div>;
  }

  const handleQRCodeClick = () => {
    setShowQRCode(!showQRCode); // QR kodu göster/gizle
  };

  return (
    <div className="bg-white">
      <CustomNavbar />
      <br /><br />
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900">İşletmeler</a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900">Restoranlar</a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a
                href="#"
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {restaurants.title}
              </a>
            </li>
          </ol>
        </nav>

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={restaurants.cardImage}
              alt="Two each of gray, white, and black shirts laying flat."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={restaurants.cardImage2}
              alt="Model wearing plain white basic tee."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={restaurants.cardImage3}
              alt="Model wearing plain white basic tee."
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {restaurants.title}
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <form className="mt-10">
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">Sosyal Medya</h3>
                </div>

                <fieldset className="mt-4">
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">

                    <SocialIcon url="https://instagram.com/pizzailforno" />
                    <SocialIcon url="https://twitter.com/pizzailforno" />
                  </div>
                </fieldset>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-sky-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >
                İletişim
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Açıklama</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{restaurants.longDescription}</p>
              </div>
            </div>

            <div className="mt-10">

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">
                    <span className="text-gray-600">{restaurants.options}</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">{restaurants.options2}</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">{restaurants.options3}</span>
                  </li>
                  <li className="text-gray-400">
                    <span className="text-gray-600">{restaurants.options4}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Detay</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {restaurants.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
      <div className="fixed bottom-4 right-4 z-10">
        {/* QR kod butonu veya ikonu buraya gelecek */}
        <button
          type="button"
          onClick={handleQRCodeClick}
          className="p-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
        >
        
<svg 
xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 24 24"
 fill="currentColor" 
 class="w-6 h-6">
  

  <path fill-rule="evenodd" d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 9.375v-4.5zM4.875 4.5a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 01-1.875-1.875v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75A.75.75 0 016 7.5v-.75zm9.75 0A.75.75 0 0116.5 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 19.125v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875-.75a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM6 16.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm9.75 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm-3 3a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75z" clip-rule="evenodd" />
</svg>
        </button>
      </div>
      {showQRCode && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <QRCode value={window.location.href} size={256} />
            <p className="mt-2 text-center text-sm text-gray-500">Sayfa adresi için QR kod</p>
            <button
              type="button"
              onClick={handleQRCodeClick}
              className="mt-4 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetailPage;