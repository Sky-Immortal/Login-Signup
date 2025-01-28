import React, { useState } from 'react';
import './GlowingCard.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const GlowingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleForm = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container">
      <div className={`circle ${isFlipped ? 'flipped' : ''}`}></div>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        {isFlipped ? <SignupForm toggleForm={toggleForm} /> : <LoginForm toggleForm={toggleForm} />}
      </div>
    </div>
  );
};

export default GlowingCard;
