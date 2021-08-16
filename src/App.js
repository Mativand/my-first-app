import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nawbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="wrapper-app">
                <Header/>
                <Navbar store={props.store}/>
                <div className="wrapper-app-content">
                    <Route path='/dialogs'
                           render={() =>
                               <DialogsContainer store={props.store}/>}/>
                    <Route path='/profile'
                           render={() =>
                               <Profile store={props.store}/>}/>
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
