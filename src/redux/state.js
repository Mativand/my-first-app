import React from "react";
import {renderApp} from "../renderApp";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', counts: '15'},
            {id: 2, message: 'It\'s my first post', counts: '16'},
        ],
        newPostText: '',
    },
    dialogsPage: {
        dialogs: [
            {
                name: 'Ilya',
                id: 1,
                src: 'https://www.fonstola.ru/download.php?file=201401/1280x768/fonstola.ru-139349.jpg'
            },
            {name: 'Sasha', id: 2},
            {name: 'Yana', id: 3},
            {name: 'Andrey', id: 4},
            {name: 'Aleksey', id: 5},
        ],

        messages: [
            {message: 'Hi', id: 1},
            {message: 'How work?', id: 2},
            {message: 'Nice', id: 3},
        ],
        textMessage: '',

    },
    sideBar: {
        friends: [
            {
                name: 'Инна',
                src: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rkw_yEoX_62WVmA1TeHFkMc6aKTM5SRkZCeTgDn6uOyic',

            },
            {
                name: 'Жорик',
                src: 'https://natalyland.ru/wp-content/uploads/0/6/e/06e518348acef04eb83e6aa79ec67ac1.jpg',

            },
            {
                name: 'Кун',
                src: 'https://avatars.mds.yandex.net/get-zen_doc/4636135/pub_60365b7ea332dd7373c6d82b_60365b9eebccc75161c63dc5/scale_1200',

            },
        ]
    }
}

window.state = state;

export let updatePost = (newText) => {

    state.profilePage.newPostText = newText;
    renderApp(state);
}

export let addPost = () => {

    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        counts: '0',
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderApp(state);
}

export let updateMessage = (text) => {
    state.dialogsPage.textMessage = text;
    renderApp(state);
};

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.textMessage,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.textMessage = '';
    renderApp(state);
}

export default state;