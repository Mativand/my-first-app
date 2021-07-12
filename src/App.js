import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nawbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="wrapper-app">
            <Header/>
            <Navbar/>
            <div className="wrapper-app-content">
                <Dialogs/>
            </div>

            {/*<Profile />*/}
        </div>
    )
}

export default App;
