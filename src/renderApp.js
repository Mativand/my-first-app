import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addMessage, updateMessage, updatePost} from "./redux/state";
import {addPost} from "./redux/state";

export const renderApp = () =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updatePost ={updatePost}
                 addMessage ={addMessage}
                 updateMessage ={updateMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};


