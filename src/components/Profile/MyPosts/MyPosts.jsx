import React, {createRef} from 'react';
import MyPost from './MyPost/MyPost';
import s from './MyPosts.module.css';
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let myPost = props.posts.map(p => <MyPost message={p.message} counts={p.counts} key={p.id}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    const onChangeTextPost = () => {
        const text = newPostElement.current.value;
        props.changeTextPost(text);
    };

    return (
        <div className={s.myPosts}>
            <span>My posts</span>
            <textarea onChange={onChangeTextPost} ref={newPostElement} type="text" value={props.newPostText}/>
            <button onClick={onAddPost}>Send</button>
            {myPost}
        </div>
    )
}

export default MyPosts;