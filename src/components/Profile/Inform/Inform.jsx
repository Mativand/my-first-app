import React from 'react';
import s from './Inform.module.css';

const Inform = () => {
  return (
    <div className={s.Inform}>
      <div className={s.name}>
        <span>Matfey Ivandaev</span>
      </div>
      <div className={s.status}>
        <span>I go to my dream!</span>
      </div>
    </div>

  )
}

export default Inform;