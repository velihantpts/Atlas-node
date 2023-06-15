import React, { useState, useEffect } from 'react';
import CustomNavbar from '../components/CustomNavbar';
import FooterComponent from '../components/FooterComponent';
import LocationCard from '../components/PlacesComponent/LocationCard';

const AllLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('/api/restaurants')
      .then(response => response.json())
      .then(data => setLocations(data));
  }, []);

  return (
    <div className="container mx-auto">
      <CustomNavbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
         {locations.map(location => (
          <LocationCard
            key={location._id}
            title={location.title}
            cardDescription={location.cardDescription}
            cardImage={location.cardImage} 
           // linkUrl={`/blog/${location._id}`}
          />
        ))} 
      </div>
      <FooterComponent />
    </div>
  );
};

export default AllLocations;
