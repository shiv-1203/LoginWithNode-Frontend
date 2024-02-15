import React, { useState } from "react";
import '../components/LoginPage.css';
import { Navigate } from "react-router-dom";

const LoginPage = ({onLogin}) =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [validLogin, setValidLogin] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://loginwithnode-backend.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        onLogin(user);
        setError(null);
        setValidLogin(true);
      } else {
        const { error } = await response.json();
        setError(error);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="loginPage">
      <div className="loginPageLoginText">Login</div>
      <div className="inputBox">
        <label>Email:</label>
        <input className='inputEmail' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="inputBox">
        <label>Password:</label>
        <input className='inputPassword' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div style={{ color: 'red', fontWeight:'700', marginTop:'10px', textAlign:'center' }}>{error}</div>}
      {validLogin && <Navigate to='/' replace={true} />}
      <div className='loginButton' onClick={handleLogin}>Login</div>
    </div>
  );
}
export default LoginPage;