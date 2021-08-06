import React, {createRef} from 'react';
import MyPost from './MyPost/MyPost';
import s from './MyPosts.module.css';
import {renderApp} from "../../../renderApp";
import state from "../../../redux/state";

const MyPosts = (props) => {

    let myPost = props.posts.map(p => <MyPost message={p.message} counts={p.counts}/>)

    let newPostElement = React.createRef();

    const changeTextPost = () => {
        const text = newPostElement.current.value;
        props.updatePost(text);
    };

    return (
        <div className={s.myPosts}>
            <span>My posts</span>
            <textarea onChange={changeTextPost} ref={newPostElement} type="text" value={props.newPostText}/>
            <button onClick={props.addPost}>Send</button>
            {myPost}
        </div>
    )
}

export default MyPosts;