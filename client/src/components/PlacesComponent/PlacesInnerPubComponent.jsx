import React, { useState, useEffect } from 'react';
import LocationCard from './LocationCard'
import {Button,} from "@material-tailwind/react";
 

const PlacesInnerPubComponent = () => {


  const [pubs, setPubs] = useState([]);

  useEffect(() => {
    fetch('/api/pubs')
      .then(response => response.json())
      .then(data => setPubs(data));
  }, []);
  return (
  
    <div className=' flex flex-col justify-around '>
        <div>
            <h3 className='text-2xl px-4 font-bold text-navy-700 mb-3 sm:text-center'> Publar </h3>
        </div>
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 content-center mx-auto'>
    
        {pubs.map(pub => (
          <LocationCard
            key={pub._id}
            title={pub.title}
            cardDescription={pub.cardDescription}
            cardImage={pub.cardImage} 
           // linkUrl={`/blog/${location._id}`}
          />
        ))} 
       </div>
       
       <div className='w-full flex justify-center'>
       <Button variant="gradient"  className="rounded-md bg-gradient-to-r from-sky-500 to-blue-500 mb-6">
       <a href="/all-locations" class="inline-block w-full h-full">
        Daha fazlası için tıklayınız
    </a>
        </Button>
        </div>
    </div>

  )
}

export default PlacesInnerPubComponent