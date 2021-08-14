import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import Avatar from './Avatar/Avatar';
import Canva from './Canva/Canva';
import Inform from './Inform/Inform';

const Profile = (props) => {

  return (
    <div>
      <div className={s.Profile}>
        <Canva />
        <Avatar />
        <Inform />
        <MyPosts profilePage={props.profilePage}  dispatch={props.dispatch}/>
      </div>
    </div>
  )
}

export default Profile;