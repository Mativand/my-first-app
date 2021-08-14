export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (text) => ({type: UPDATE_POST, newText: text});
const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

const profileReducer = (state, action) => {
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