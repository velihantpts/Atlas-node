import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import FooterComponent from '../components/FooterComponent'
import EventHeader from '../components/EventComponents/EventHeader'
import EventContent from '../components/EventComponents/EventContent'
function Event() {
  return (
    <div>
      <CustomNavbar />
      <EventHeader />
      <EventContent />
      <FooterComponent />
    </div>
  )
}

export default Event