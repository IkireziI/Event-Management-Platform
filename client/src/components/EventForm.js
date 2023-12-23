import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/events', { title, description, date });
      alert('Event created successfully!');
      // Optionally, you can reset the form fields here
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
