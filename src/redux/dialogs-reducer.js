export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const enterMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, text: text,})
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.textMessage,
            };
            state.messages.push(newMessage);
            state.textMessage = '';
            return state
        case UPDATE_MESSAGE:
            state.textMessage = action.text;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;