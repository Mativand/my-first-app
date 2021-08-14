import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElement = props.dialogs.map(d =>
        <div className={s.dialog + ' ' + s.active}>
            <DialogItem name={d.name} id={d.id} src={d.src}/>
        </div>
    )

    let messageElement = props.messages.map(m => <Message message={m.message}/>)

    let getTextarea = React.createRef();

    let onAddMessage = () => {
        props.addMessage()
    }

    const onEnterMessage = () => {
        let text = getTextarea.current.value;
        props.enterMessage(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    {messageElement}
                    <textarea onChange={onEnterMessage} ref={getTextarea} value={props.textMessage}/>
                    <button onClick={onAddMessage} >Get message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;