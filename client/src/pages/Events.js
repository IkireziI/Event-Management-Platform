import React, { useState } from "react";
import EventList from "../components/EventList";
import EventForm from "../components/EventForm";

function Events() {
  const [editingEvent, setEditingEvent] = useState(null);

  return (
    <div>
      <h2 className="text-center mb-4">Manage Events</h2>
      <EventForm eventToUpdate={editingEvent} clearEditing={() => setEditingEvent(null)} />
      <EventList setEditingEvent={setEditingEvent} />
    </div>
  );
}

export default Events;
