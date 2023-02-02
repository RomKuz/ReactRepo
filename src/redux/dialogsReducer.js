const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Vasia'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Саня'},
        {id: 4, name: 'Вася'},
        {id: 5, name: 'Сер'},
        {id: 6, name: 'Katia'}
    ],
    messagesData: [
        {id: 1, message: 'Sex'},
        {id: 2, message: 'qweha'},
        {id: 3, message: 'SASA'},
        {id: 4, message: 'Sakom'},
        {id: 5, message: 'Vas'},
        {id: 6, message: 'Sisi'}
    ],
    messageInputText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let message = state.messageInputText
            return  {
                ...state,
                messageInputText: '',
                messagesData: [...state.messagesData, {id: 9, message: message,}]
            }

        case UPDATE_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                messageInputText:action.messageInputText
            }
            return
        default :
            return state
    }


}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (message) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageInputText: message
})

export default dialogsReducer