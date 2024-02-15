import './App.css';
import { useState } from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (loggedInUser) =>{
    setUser(loggedInUser);
  }
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='dim-overlay'></div>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<HomePage user={user} setUser={setUser}/>}></Route>
          <Route path='*' element={<HomePage user={user} setUser={setUser}/>}></Route>
          <Route path='/login' onLogin={handleLogin} element={<LoginPage onLogin={handleLogin}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
