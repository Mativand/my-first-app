import React from 'react';
import {addMessageActionCreator, enterMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textMessage:state.dialogsPage.textMessage,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        enterMessage: (text) => {
            let action = enterMessageActionCreator(text);
            dispatch(action);
        },
    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;