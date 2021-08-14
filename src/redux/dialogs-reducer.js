export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const enterMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, text: text,})
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {
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

}
const dialogsReducer = (state = initialState, action) => {
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