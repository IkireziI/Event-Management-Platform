import React from "react";
import axios from "axios";

const API_ENDPOINT = "http://localhost:5000/events";

function EventCard({ event, setEditingEvent }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      axios
        .delete(`${API_ENDPOINT}/${event._id}`)
        .then(() => {
          window.location.reload(); // Refresh after deletion
        })
        .catch((error) => console.error("Error deleting event:", error));
    }
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{event.title}</h5>
          <p className="card-text">{event.description}</p>
          <p className="card-text">
            <small>{new Date(event.date).toLocaleDateString()}</small>
          </p>
          <div className="d-flex justify-content-between">
            <button
              onClick={() => setEditingEvent(event)}
              className="btn btn-secondary"
            >
              Edit
            </button>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
