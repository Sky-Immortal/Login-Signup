import React from 'react';
import SideNav from './SideNav/SideNav';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideNav />
      <div className="main-content">
        <div className="welcome-container">
          <h1>Welcome to the Dashboard</h1>
        </div>
        <div className="content-container">
          {/* Add your main dashboard content here */}
          <p>This is the content area of the dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
