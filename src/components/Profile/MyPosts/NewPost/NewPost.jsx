import React from 'react';
import s from './NewPost.module.css';

const NewPost = () => {
  return (

    <div className={s.NewPost}>
      <span>My posts</span>
      <textarea type="text" placeholder="yours news..." />
      <button>Send</button>
    </div>




  )
}

export default NewPost;