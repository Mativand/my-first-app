import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nawbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="wrapper-app">
      <Header />
      <Navbar />
      <Profile />
    </div>
  )
}

export default App;
