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
import {addMessage} from "./redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper-app">
                <Header/>
                <Navbar state = {props.state.sideBar}/>
                <div className="wrapper-app-content">
                    <Route path='/dialogs'
                           render={ () =>
                               <Dialogs
                                   addMessage = {props.addMessage}
                                   updateMessage = {props.updateMessage}
                                   state = {props.state.dialogsPage}/>}/>
                    <Route path='/profile'
                           render={ () =>
                               <Profile
                                   state={props.state.profilePage}
                                   addPost={props.addPost}
                                   updatePost={props.updatePost}/>}/>
                    <Route path='/news'
                           render={ () =>  <News/>}/>
                    <Route path='/music'
                           render={ () =>  <Music/>}/>
                    <Route path='/settings'
                           render={ () =>  <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
