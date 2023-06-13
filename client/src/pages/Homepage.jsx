import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import FooterComponent from '../components/FooterComponent'
import LocationPromations from '../components/HomePageComponents/LocationsPromations'
import PartnerComponent from '../components/HomePageComponents/PartnerComponent'
import PriceComponent from '../components/HomePageComponents/PriceComponent'
import SliderComponent from '../components/HomePageComponents/SliderComponent'



function Homepage() {
  return (
    <div className='container '>
        <CustomNavbar />
        <SliderComponent />
        <LocationPromations />
        <PartnerComponent />
        <PriceComponent />
        <FooterComponent />
    </div>
  )
}

export default Homepage