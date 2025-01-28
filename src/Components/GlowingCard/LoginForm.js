import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory

const LoginForm = ({ toggleForm }) => {
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [username, setUsername] = useState(''); // State for username
  const history = useHistory(); // Initialize useHistory

  useEffect(() => {
    setFadeClass('fade-in');
    return () => setFadeClass('fade-out');
  }, []);

  const handleLogin = () => {
    // Navigate to dashboard with username
    history.push(`/dashboard?username=${username}`);
  };

  return (
    <div className={`login-form ${fadeClass}`} style={{ transition: 'opacity 1s' }}>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} // Update username state
      />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button> {/* Add onClick to handleLogin */}
      <button className="flip-button" onClick={toggleForm}>Don't have an account?</button>
    </div>
  );
};

export default LoginForm;
