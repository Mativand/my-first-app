import React from 'react';
import Avatar from './Avatar/Avatar';
import Like from './Like/Like';
import s from './MyPost.module.css';
import Text from './Text/Text';

const MyPost = (props) => {

  return(
        <div className={s.Post}>
          <Avatar/>
          <Text message={props.message} />
          <Like counts={props.counts}/>
        </div>
      
  )
}

export default MyPost;