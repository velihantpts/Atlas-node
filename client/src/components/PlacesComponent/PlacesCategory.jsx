import React from 'react'
import { Link } from 'react-router-dom';


function PlacesCategory() {
  return (
       // iconlar , textler , boyut vs degişimi yapılacak
       <div className="container mx-auto flex flex-row pt-10 justify-around px-32">
       <div className="flex flex-col justify-center">
         <Link to="/all-restaurants">
           <div className="w-12 h-12 sm:w-18 sm:h-18 m-2 md:w-24 md:h-24 boxShadow_1 cursor-pointer rounded-full image-cover bg-[url('https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"></div>
           <h3 className="text-center mt-2">Restoranlar</h3>
         </Link>
       </div>
       <div className="flex flex-col justify-center">
         <Link to="/all-cinemas">
           <div className="w-12 h-12 sm:w-18 sm:h-18 m-2 md:w-24 md:h-24 boxShadow_1 cursor-pointer rounded-full image-cover bg-[url('https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"></div>
           <h3 className="text-center mt-2">Sinema</h3>
         </Link>
       </div>
       <div className="flex flex-col justify-center">
         <Link to="/all-cafes">
           <div className="w-12 h-12 sm:w-18 sm:h-18 m-2 md:w-24 md:h-24 boxShadow_1 cursor-pointer rounded-full image-cover bg-[url('https://images.pexels.com/photos/2128026/pexels-photo-2128026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"></div>
           <h3 className="text-center mt-2">Kafeler</h3>
         </Link>
       </div>

       <div className="flex flex-col justify-center">
         <Link to="/all-pubs">
           <div className="w-12 h-12 sm:w-18 sm:h-18 m-2 md:w-24 md:h-24 boxShadow_1 cursor-pointer rounded-full image-cover bg-[url('https://images.pexels.com/photos/1267681/pexels-photo-1267681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"></div>
           <h3 className="text-center mt-2">Publar</h3>
         </Link>
       </div>
     </div>
  );
}

export default PlacesCategory;
