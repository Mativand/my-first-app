import React, {createRef} from 'react';
import MyPost from './MyPost/MyPost';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let showValue = () => {
        const text = newPostElement.current.value;
        alert(text)
    };

    let myPost = props.posts.map(p => <MyPost message={p.message} counts={p.counts}/>)
    return (

        <div className={s.myPosts}>
            <span>My posts</span>
            <textarea ref={newPostElement} type="text" placeholder="yours news..." />
            <button onClick={showValue}>Send</button>
            {myPost}
        </div>


    )
}

export default MyPosts;