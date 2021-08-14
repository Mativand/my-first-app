export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_POST, newText: text});
const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', counts: '15'},
        {id: 2, message: 'It\'s my first post', counts: '16'},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                counts: '0',
            }

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_POST:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}
export default profileReducer;