import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogElement = props.state.dialogs.map(d =>
        <div className={s.dialog + ' ' + s.active}>
            <DialogItem name={d.name} id={d.id} src={d.src}/>
        </div>
    )

    let messageElement = props.state.messages.map(m => <Message message={m.message}/>)

    let getTextarea = React.createRef();

    let showText = () => {
        let text = getTextarea.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    {messageElement}
                    <textarea ref={getTextarea}></textarea>
                    <button onClick={showText} >Get message</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;