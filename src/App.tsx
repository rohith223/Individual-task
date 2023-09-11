import React from 'react';
import Sign from './login';
import Register from './Signup';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sign />} />
           <Route path="/registration" element={<Register />} /> 
           <Route path = "/dashboard" element = {<Dashboard />}/>
           <Route path = "/profile" element = {<Profile />}/>
        </Routes>
        </BrowserRouter>
     
    </>
  );
}

export default App;
