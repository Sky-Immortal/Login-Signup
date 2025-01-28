import React from 'react';
import './SideNav.css'; // Import the CSS file for styling
import { ReactComponent as DashboardIcon } from '../../../Images/Side Nav/Dashboard Icon.svg';
import { ReactComponent as PaymentIcon } from '../../../Images/Side Nav/fluent_payment-32-regular.svg';
import { ReactComponent as SettingsIcon } from '../../../Images/Side Nav/setting2.svg';
import { ReactComponent as HelpIcon } from '../../../Images/Side Nav/material-symbols_help-outline.svg';
import { ReactComponent as AnalyticsIcon } from '../../../Images/Side Nav/Analitycs.svg';
import { ReactComponent as DepositIcon } from '../../../Images/Side Nav/carbon_percentage.svg';
import { ReactComponent as MoneyboxIcon } from '../../../Images/Side Nav/ph_piggy-bank.svg';
import { ReactComponent as SecuritiesIcon } from '../../../Images/Side Nav/arcticons_eufy-security.svg';
import { ReactComponent as LogoIcon } from '../../../Images/Side Nav/Symbol.svg';
import images from '../../images';

const SideNav = () => {
  return (
    <nav className="side-nav">
      <div className="top-container">
        <div className="logo-container">
            <LogoIcon className="logo-icon" />
          <h1 className=' logo-text text-lg'>InvestBank</h1>
        </div>
        <hr className="separator" />
        <div className="links-container">
          <ul>
            <li><a href="#home"><DashboardIcon className="nav-icon" />Dashboard</a></li>
            <li><a href="#analytics"><AnalyticsIcon className="nav-icon" />Analytics</a></li>
            <li><a href="#payments"><PaymentIcon className="nav-icon" />Payments</a></li>
            <li><a href="#deposit"><DepositIcon className="nav-icon" />Deposit</a></li>
            <li><a href="#moneybox"><MoneyboxIcon className="nav-icon" />Moneybox</a></li>
            <li><a href="#securities"><SecuritiesIcon className="nav-icon" />Securities</a></li>
            <hr className="separator width-90" />
            <li><a href="#help"><HelpIcon className="nav-icon" />Help</a></li>
            <li><a href="#settings"><SettingsIcon className="nav-icon" />Settings</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom-container">
        <div className="profile-container">
          <img src={images.youngsfav1} alt="User Profile" className="profile-image" />
          <div className="profile-info">
            <p className="profile-username">Username</p>
            <p className="profile-email">user@example.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
