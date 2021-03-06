import React from "react";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";


const store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель observer, он же патерн
    },

    dispatch(action) {

        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBarReducer = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}
// export const addPostActionCreator = () => ({type: ADD_POST});
// export const updatePostActionCreator = (text) => ({type: UPDATE_POST, newText: text});
// export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
// export const enterMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, text: text,})

export default store;