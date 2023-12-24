import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import axios from 'axios';

const API_ENDPOINT = 'http://localhost:5000/events';

function EventList({ setEditingEvent }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(API_ENDPOINT)
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="row">
      {events.map(event => (
        <EventCard key={event._id} event={event} setEditingEvent={setEditingEvent} />
      ))}
    </div>
  );
}

export default EventList;
