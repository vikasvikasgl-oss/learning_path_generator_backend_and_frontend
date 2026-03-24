import React, { useState } from 'react';

const Dashboard = () => {
  const [pathName, setPathName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Learning Path:', { pathName, description });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Path Name:</label>
          <input 
            type="text" 
            value={pathName} 
            onChange={(e) => setPathName(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Create Learning Path</button>
      </form>
    </div>
  );
};

export default Dashboard;