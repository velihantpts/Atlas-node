import React, { useState, useEffect } from 'react';
import CustomNavbar from '../components/CustomNavbar';
import FooterComponent from '../components/FooterComponent';

const TransportationDetailPage = ({ id }) => {
  const [transportation, setTransportation] = useState(null);


  useEffect(() => {
    fetch(`/api/transportations/${id}`)
      .then(response => response.json())
      .then(data => setTransportation([data])) // transportation'ı dizi olarak set ediyoruz
      .catch(error => console.error('Hata:', error));
  }, [id]);

  if (!transportation) {
    return <div>Yükleniyor...</div>;
  }
  return (
    <div>
      <CustomNavbar />
      {transportation.map((bus) => (
        <div className="flex flex-col items-center py-24 min-h-screen p-10">
          <div className="flex flex-row">
            <div className="flex flex-row mr-5 items-center align-items-center">
              <form>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
                  Hat seçiniz
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Hat seciniz"
                    required
                  />
                </div>
              </form>
            </div>

            <div className="w-full p-16 sm:p-16 lg:p-16 mb-10  rounded-md ">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 ">Hat no : {bus.bus_number}</h1>
              <h1 className="text-2xl tracking-tight text-gray-900 mt-5">Güzergah : {bus.destination}</h1>
              <h1 className="text-2xl tracking-tight text-gray-900 mt-5">
                Hafta içi ve hafta sonu sefer saatlerimiz değişiklik göstermektedir.
              </h1>
            </div>
          </div>

          <div className="flex flex-row rounded-md p-10">
            <div className="flex flex-row mr-10">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Hafta İçi
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Hafta içi sefer saatleri</p>
                  </caption>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Ana durak kalkış
                      </th>
                      <th scope="col" className="px-6 py-3">
                        İyaş durak kalkış
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Üniversite kalkış
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {bus.anadurak_clock_1}
                      </th>
                      <td className="px-6 py-4">{bus.iyasdurak_clock_1}</td>
                      <td className="px-6 py-4">{bus.unidurak_clock_1}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {bus.anadurak_clock_2}
                      </th>
                      <td className="px-6 py-4">{bus.iyasdurak_clock_2}</td>
                      <td className="px-6 py-4">{bus.unidurak_clock_2}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {bus.anadurak_clock_3}
                      </th>
                      <td className="px-6 py-4">{bus.iyasdurak_clock_3}</td>
                      <td className="px-6 py-4">{bus.unidurak_clock_3}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {bus.anadurak_clock_4}
                      </th>
                      <td className="px-6 py-4">{bus.iyasdurak_clock_4}</td>
                      <td className="px-6 py-4">{bus.unidurak_clock_4}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {bus.anadurak_clock_5}
                      </th>
                      <td className="px-6 py-4">{bus.iyasdurak_clock_5}</td>
                      <td className="px-6 py-4">{bus.unidurak_clock_5}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 ">
                    Hafta Sonu
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Hafta sonu sefer saatleri
                    </p>
                  </caption>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Ana durak kalkış
                      </th>
                      <th scope="col" className="px-6 py-3">
                        İyaş durak kalkış
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Üniversite kalkış
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {bus.anadurak_hs_clock_1}
                      </th>
                      <td className="px-6 py-4">{bus.iyasdurak_hs_clock_1}</td>
                      <td className="px-6 py-4">{bus.unidurak_hs_clock_1}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {bus.anadurak_hs_clock_2}
                      </th>
                      <td className="px-6 py-4">{bus.iyasdurak_hs_clock_2}</td>
                      <td className="px-6 py-4">{bus.unidurak_hs_clock_2}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {bus.anadurak_hs_clock_3}
                      </th>
                      <td className="px-6 py-4">{bus.iyasdurak_hs_clock_3}</td>
                      <td className="px-6 py-4">{bus.unidurak_hs_clock_3}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {bus.anadurak_hs_clock_4}
                      </th>
                      <td className="px-6 py-4">{bus.iyasdurak_hs_clock_4}</td>
                      <td className="px-6 py-4">{bus.unidurak_hs_clock_4}</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {bus.anadurak_hs_clock_5}
                      </th>
                      <td className="px-6 py-4">{bus.iyasdurak_hs_clock_5}</td>
                      <td className="px-6 py-4">{bus.unidurak_hs_clock_5}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
      <FooterComponent />
    </div>
  );
}

export default TransportationDetailPage;