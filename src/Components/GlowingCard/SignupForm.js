import React, { useEffect, useState } from 'react';

const SignupForm = ({ toggleForm }) => {
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    setFadeClass('fade-in');
    return () => setFadeClass('fade-out');
  }, []);

  return (
    <div className={`signup-form rotated ${fadeClass}`}>
      <h2>Signup</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Signup</button>
      <button className="flip-button" onClick={toggleForm}>Already have an account?</button>
    </div>
  );
};

export default SignupForm;
