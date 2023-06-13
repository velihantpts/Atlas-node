import React, { useState, useEffect } from 'react';
import Calender from './Calender';
import FilterComponent from './FilterComponent';
import Table from './Table';

const EventContent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // api blogs yazılmadı
    fetch('/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="container flex flex-row justify-between">
      <div className="flex-none mr-16">
        <Calender />
        <FilterComponent />
      </div>
      <div className="grow">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Etkinlik Adı
              </th>
              <th scope="col" className="px-6 pl-11 py-3">
                Tür
              </th>
              <th scope="col" className="px-6 py-3">
                Tarih
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
        </table>
        {events.map((event) => (
          <Table
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
        ))}
      </div>
    </div>
  );
}

export default EventContent;
