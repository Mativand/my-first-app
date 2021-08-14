import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, enterMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogElement = props.state.dialogsPage.dialogs.map(d =>
        <div className={s.dialog + ' ' + s.active}>
            <DialogItem name={d.name} id={d.id} src={d.src}/>
        </div>
    )

    let messageElement = props.state.dialogsPage.messages.map(m => <Message message={m.message}/>)
    let getTextarea = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const enterMessage = () => {
        let text = getTextarea.current.value;
        let action = enterMessageActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    {messageElement}
                    <textarea onChange={enterMessage} ref={getTextarea} value={props.state.dialogsPage.textMessage}/>
                    <button onClick={addMessage} >Get message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;