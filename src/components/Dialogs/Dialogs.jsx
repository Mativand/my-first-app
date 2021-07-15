import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
}

const Message = (props) => {
    return <div>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <DialogItem name="Ilya" id="1"/>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <DialogItem name="Sasha" id="2"/>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <DialogItem name="Yana" id="3"/>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <DialogItem name="Andrey" id="4"/>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <DialogItem name="Aleksey" id="5"/>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    <Message message="Hi"/>
                    <Message message="How work?"/>
                    <Message message="Nice!"/>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;