import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_ENDPOINT = 'http://localhost:5000/events';

function EventForm({ eventToUpdate, clearEditing }) {
  const [event, setEvent] = useState(eventToUpdate || { title: '', description: '', date: '' });

  useEffect(() => {
    setEvent(eventToUpdate || { title: '', description: '', date: '' });
  }, [eventToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = event._id ? 'put' : 'post';
    const url = event._id ? `${API_ENDPOINT}/${event._id}` : API_ENDPOINT;

    axios[method](url, event)
      .then(() => {
        clearEditing();
        window.location.reload(); // Refresh after submission
      })
      .catch(error => console.error('Error submitting event:', error));
  };

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  return (
    <div className="card mb-4">
      <div className="card-header">Event Form</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title:</label>
            <input type="text" className="form-control" name="title" value={event.title} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea className="form-control" name="description" value={event.description} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Date:</label>
            <input type="date" className="form-control" name="date" value={event.date} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EventForm;
