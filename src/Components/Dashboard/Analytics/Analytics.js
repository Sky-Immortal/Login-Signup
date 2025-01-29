import React from 'react';
import './Analytics.css'; // Import the CSS file for styling
import { FiArrowUp } from 'react-icons/fi'; // Import a thinner up arrow icon

const Analytics = () => {
  return (
      <div className="analytics-wrapper">
        <AnalyticsItem text1="Total Income" text2="974,99" text3="from last week" iconText="7.85" />
        <AnalyticsItem text1="Total Expense" text2="425,30" text3="from last week" iconText="22.30" />
        <AnalyticsItem text1="Total Savings" text2="549,61" text3="from last week" iconText="9.50" />
      </div>
  );
};

const AnalyticsItem = ({ text1, text2, text3, iconText }) => {
  return (
    <div className="analytics-container">
      <div className="text-container">
        <p>{text1}</p>
        <p className="middle-text">${text2}</p>
        <p>{text3}</p>
      </div>
      <div className="icon-container">
        <FiArrowUp className="chart-icon" />
        <p className="icon-text">{iconText}%</p>
      </div>
    </div>
  );
};

export default Analytics;
