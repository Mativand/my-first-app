import React from 'react';
import s from './Profile.module.css';
import Avatar from './Avatar/Avatar';
import Canva from './Canva/Canva';
import Inform from './Inform/Inform';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

  return (
    <div>
      <div className={s.Profile}>
        <Canva />
        <Avatar />
        <Inform />
        <MyPostsContainer store={props.store} />
      </div>
    </div>
  )
}

export default Profile;