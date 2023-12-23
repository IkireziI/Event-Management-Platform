import React from 'react';

const EventCard = ({ event }) => (
  <div>
    <h3>{event.title}</h3>
    <p>{event.description}</p>
    <p>Date: {new Date(event.date).toLocaleDateString()}</p>
    {/* Add more details or actions as needed */}
  </div>
);

export default EventCard;
