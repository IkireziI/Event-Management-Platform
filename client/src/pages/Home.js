import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Event Management System</h1>
      <p>Manage your events efficiently and easily.</p>
      <Link to="/events" className="btn btn-primary">View Events</Link>
    </div>
  );
}

export default Home;
