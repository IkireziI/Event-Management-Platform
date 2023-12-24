import React from "react";
import EventList from "../components/EventList";
import EventForm from "../components/EventForm";

function Events() {
  return (
    <div>
      <h2 className="text-center mb-4">Manage Events</h2>
      <EventForm />
      <EventList />
    </div>
  );
}

export default Events;
