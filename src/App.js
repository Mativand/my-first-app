import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nawbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper-app">
                <Header/>
                <Navbar state={props.state.sideBar}/>
                <div className="wrapper-app-content">
                    <Route path='/dialogs'
                           render={() =>
                               <Dialogs state={props.state} dispatch={props.dispatch}/>}/>
                    <Route path='/profile'
                           render={() =>
                               <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='/news'
                           render={() => <News/>}/>
                    <Route path='/music'
                           render={() => <Music/>}/>
                    <Route path='/settings'
                           render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
