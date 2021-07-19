import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) => {

    let friendsElement = props.state.map(f =>
        <div className={s.column}>
            <div className={s.img}>
                <img src={f.src}/>
            </div>
            <div className={s.name}>
                {f.name}
            </div>

        </div>
    )

    return (
        <div className={s.friends + ' ' + s.item}>
            <NavLink to="/friends">
                <div className={s.title}>
                    Friends
                </div>
                <div className={s.columns}>
                    {friendsElement}
                </div>
            </NavLink>
        </div>
    )
}

export default Friends;