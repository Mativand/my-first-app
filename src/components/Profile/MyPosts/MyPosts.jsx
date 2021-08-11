import React, {createRef} from 'react';
import MyPost from './MyPost/MyPost';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    let myPost = props.store.state.profilePage.posts.map(p => <MyPost message={p.message} counts={p.counts}/>)

    let newPostElement = React.createRef();

    const changeTextPost = () => {
        const text = newPostElement.current.value;
        props.store.updatePost(text);
    };

    return (
        <div className={s.myPosts}>
            <span>My posts</span>
            <textarea onChange={changeTextPost} ref={newPostElement} type="text" value={props.store.newPostText}/>
            <button onClick={props.store.addPost}>Send</button>
            {myPost}
        </div>
    )
}

export default MyPosts;