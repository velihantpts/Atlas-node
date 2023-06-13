import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import FooterComponent from '../components/FooterComponent'
import PlacesCategory from '../components/PlacesComponent/PlacesCategory'
import PlaceContent from '../components/PlacesComponent/PlaceContent'
function Locations() {
  return (

    <div className='container mx-auto'>
            <CustomNavbar />
            <PlacesCategory />
            <hr class="h-px my-8 bg-gray-400 border-0 "></hr>
            <PlaceContent />
            <FooterComponent />
    </div>
  )
}

export default Locations