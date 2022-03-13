import React from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext'
import ProtectedRouter from './Components/Helper/ProtectedRouter';
import User from './Components/User/User';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="user/*" element={
              <ProtectedRouter>
                <User />
              </ProtectedRouter>
            } 
            />
            </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
