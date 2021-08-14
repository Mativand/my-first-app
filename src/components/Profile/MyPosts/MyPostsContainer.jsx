import React, {createRef} from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const changeTextPost = (text) => {
        let action = updatePostActionCreator(text)
        props.store.dispatch(action);
    };

    return (
       <MyPosts changeTextPost={changeTextPost}
                addPost={addPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;