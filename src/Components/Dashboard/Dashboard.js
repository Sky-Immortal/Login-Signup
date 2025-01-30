import React, { useState } from 'react';
import SideNav from './SideNav/SideNav';
import './Dashboard.css'; // Import the CSS file for styling
import { FaSearch, FaBell, FaEllipsisV } from 'react-icons/fa'; // Import react icons
import { FiPlus } from 'react-icons/fi'; // Import a lighter plus icon
import images from '../images'; // Import images
import Analytics from './Analytics/Analytics'; // Import Analytics component
import Wallet from './Wallet/Wallet'; // Import Wallet component

const Dashboard = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const username = "username"; // Replace with actual logic to get the username from login

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <div className="dashboard-container">
      <SideNav />
      <div className="main-content">
        <div className="nav-bar">
          <div className="search-bar-container">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          <div className="notification-container">
            <div className="notification-icon">
              <FaBell />
            </div>
            <img src={images.youngsfav1} alt="User Profile" className="nav-profile-image" />
          </div>
        </div>

        <div className="content-container">
          <div className="welcome-container">
            <div className="hello-container">
              <h2>Hello, {username}!</h2>
              <p>Send and receive funds with pleasure.</p>
            </div>
            <div className="welcome-button-container">
              <button className="payment-button">
                Payment <FiPlus className="plus-icon" />
              </button>
              <div className="ellipsis-container">
                <FaEllipsisV className="ellipsis-icon" onClick={toggleBoxVisibility} />
                {isBoxVisible && (
                  <div className="payment-details-box">
                    <p>Payment Details</p>
                    {/* Add more details as needed */}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="stats-container">
            <div className="column">
              <Analytics />
              <Wallet />
              
              <div className="row">Row 3</div>
            </div>
            <div className="column">
              <div className="row">Row 1</div>
              <div className="row">Row 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
