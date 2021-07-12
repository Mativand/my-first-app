import React from 'react';
import s from './Like.module.css';

const Like = (props) => {
  return (

    <div className={s.Like}>
      <button>Like{props.counts}</button>
    </div>


  )
}

export default Like;