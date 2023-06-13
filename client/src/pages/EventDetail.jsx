import React, { useState, useEffect } from 'react';
import CustomNavbar from '../components/CustomNavbar'
import FooterComponent from '../components/FooterComponent'
import EventDetailHeader from '../components/EventComponents/EventDetailHeader'
import EventDetailInfo from '../components/EventComponents/EventDetailInfo'
const EventDetail = ({ id }) => {
  const [event, setEvent] = useState(null);
  console.log(id);

  
  useEffect(() => {
    fetch(`/api/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
         <CustomNavbar />
         <EventDetailHeader 
               key={event._id}
               eventName={event.eventName}
               eventType={event.eventType}
               imageURL={event.imageURL}
               eventDate={event.eventDate}
               contact={event.contact}
               eventAmount={event.eventAmount}
               eventDescription={event.eventDescription}
               address={event.address}      
               linkUrl={`/event/${event._id}`} 
         />
         <EventDetailInfo 
                     key={event._id}
                     eventName={event.eventName}
                     eventType={event.eventType}
                     imageURL={event.imageURL}
                     eventDate={event.eventDate}
                     contact={event.contact}
                     eventAmount={event.eventAmount}
                     eventDescription={event.eventDescription}
                     address={event.address}      
                     linkUrl={`/event/${event._id}`} 
         
         />
         <FooterComponent />
    </div>
  )
}

export default EventDetail