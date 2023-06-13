import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import FooterComponent from '../components/FooterComponent'
import SearchBarComponent from '../components/TransportationComponent/SearchBarComponent'
import TransportationAnc from '../components/TransportationComponent/TransportationAnc'
function Transportation() {
  return (
    <div>
            <CustomNavbar />
            <SearchBarComponent />
            <TransportationAnc />
            <FooterComponent />
    </div>
  )
}

export default Transportation