import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.contentBlock}>
        <div className={s.imgBackground}>
          <img src='https://www.rentacarefex.com/assets/img/blog/rent-a-car-beograd-efex.jpg' />
        </div>
        <div className={s.wrapperAva}>
          <div className={s.ava}>
            <img src='https://sun1-29.userapi.com/s/v1/if1/8JPpA6bunJsQm_1kKSu-07gkXk24L7grpRppo0IUHuq3je8s8RXPEL6yxzpB2flBE97tBw.jpg?size=200x0&quality=96&crop=157,59,465,465&ava=1' />
          </div>
        </div>
        <div className={s.name}>
          <span>Matfey Ivandaev</span>
        </div>
        <div className={s.status}>
          <span>I go to my dream!</span>
        </div>
        <div className={s.myPosts}>
          <span>My posts</span>
          <input type="text" placeholder="yours news..." />
          <button>Send</button>
        </div>
        <div className={s.item}>
          New post
        </div>
        <div className={s.item}>
          post 1
        </div>
        <div className={s.item}>
          post 2
        </div>
      </div>
    </div>
  )
}

export default Profile;