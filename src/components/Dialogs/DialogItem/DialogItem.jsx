import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (

        <NavLink to={path}><img className={s.img} src={props.src} id={props.id} key={props.id}/>{props.name}</NavLink>
    )
}
export default DialogItem;