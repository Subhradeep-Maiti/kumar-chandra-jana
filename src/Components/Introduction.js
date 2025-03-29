import React from 'react';

const Introduction = () => {
  return (
    <div className="introduction-container">
      <h1>Welcome to the Kumar Chandra Jana Website</h1>
      <p>Learn more about the life and achievements of Kumar Chandra Jana.</p>
      <button onClick={() => window.location.href = '/biography'}>Explore Biography</button>
    </div>
  );
};

export default Introduction;
