import React from 'react';
import s from './Text.module.css';

const Text = (props) => {
  return (

    <div className={s.Text}>
      <p>{props.message}</p>
    </div>


  )
}

export default Text;