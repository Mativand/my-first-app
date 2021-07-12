import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (

        <div className={s.myPosts}>
          <span>My posts</span>
          <textarea type="text" placeholder="yours news..." />
          <button>Send</button>

         <MyPost message='Hi, how are you?' counts=' 15'/>
         <MyPost message="It's my first post" counts=' 16'/>
        </div>
    
   
  )
}

export default MyPosts;