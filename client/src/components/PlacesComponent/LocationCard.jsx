import React from 'react';
import { Link } from 'react-router-dom';
const LocationCard = ({ title, cardImage, cardDescription,linkUrl }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <div className="!z-5 relative rounded-[20px] max-w-[300px] sm:max-w-[500px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] undefined">
          <div className="h-full w-full">
            <div className="relative w-full">
              <div
                className="mb-3 h-[300px] w-full rounded-xl 3xl:h-[200px] 3xl:w-full overflow-hidden"
              >
                <img
                  src={cardImage}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
              <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <div className="mb-3 flex items-center justify-between px-1 md:items-start">
              <div className="mb-2 w-full">
                <p className="text-lg font-bold text-gray-700">{title}</p>
                <p className="text-sm font-bold text-gray-300 mb-2">
                  {cardDescription}
                </p>
                <div className="text-start">
                <Link to={linkUrl} className='inline-block text-blue-500 underline hover:text-blue-400'>
  Daha fazlası  
</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
