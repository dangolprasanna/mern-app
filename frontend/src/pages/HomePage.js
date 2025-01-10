// src/pages/HomePage.jsx
import React from 'react';
import UserTable from '../components/UserTable';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* Render the user table here */}
      <UserTable />
    </div>
  );
}

export default HomePage;
