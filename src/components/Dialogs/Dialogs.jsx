import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              <div className={s.dialog + ' ' + s.active}>
                 <NavLink to="/dialogs/1">Ilya</NavLink>
              </div>
              <div className={s.dialog+ '' +s.active}>
                  <NavLink to="/dialogs/2">Sasha</NavLink>
              </div>
              <div className={s.dialog+ '' +s.active}>
                  <NavLink to="/dialogs/3">Yana</NavLink>
              </div>
              <div className={s.dialog+ '' +s.active}>
                  <NavLink to="/dialogs/4">Andrey</NavLink>
              </div>
              <div className={s.dialog+ '' +s.active}>
                  <NavLink to="/dialogs/5">Aleksey</NavLink>
              </div>
          </div>
          <div className={s.messages}>
                <div className={s.message}>
                    <div>Hi!</div>
                    <div>How work?</div>
                    <div>Nice!</div>
                </div>
              <div className={s.message}>
                  <div>Hi!</div>
                  <div>Do you have food?</div>
                  <div>Nice!</div>
              </div>
              <div className={s.message}>
                  <div>Hi!</div>
                  <div>Please help me</div>
                  <div>Thanks!</div>
              </div>
              <div className={s.message}>
                  <div>...!</div>
                  <div>Yes</div>
                  <div>Ok!</div>
              </div>
              <div className={s.message}>
                  <div>Hi!</div>
                  <div>bla bla?</div>
                  <div>Nice!</div>
              </div>
          </div>
      </div>
    )
}

export default Dialogs;