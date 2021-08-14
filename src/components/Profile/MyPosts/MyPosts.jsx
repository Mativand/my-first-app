import React, {createRef} from 'react';
import MyPost from './MyPost/MyPost';
import s from './MyPosts.module.css';
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let myPost = props.profilePage.posts.map(p => <MyPost message={p.message} counts={p.counts}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const changeTextPost = () => {
        const text = newPostElement.current.value;
        let action = updatePostActionCreator(text)
        props.dispatch(action);
    };

    return (
        <div className={s.myPosts}>
            <span>My posts</span>
            <textarea onChange={changeTextPost} ref={newPostElement} type="text" value={props.profilePage.newPostText}/>
            <button onClick={addPost}>Send</button>
            {myPost}
        </div>
    )
}

export default MyPosts;