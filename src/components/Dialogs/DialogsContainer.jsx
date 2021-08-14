import React from 'react';
import {addMessageActionCreator, enterMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let dialogElement = state.dialogsPage.dialogs

    let messageElement = state.dialogsPage.messages

    let textMessage = state.dialogsPage.textMessage

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const enterMessage = (text) => {
        let action = enterMessageActionCreator(text);
        props.store.dispatch(action);
    };

    return (
       <Dialogs addMessage={addMessage}
                enterMessage={enterMessage}
                dialogs={dialogElement}
                messages={messageElement}
                textMessage={textMessage}
       />
    )
}

export default DialogsContainer;