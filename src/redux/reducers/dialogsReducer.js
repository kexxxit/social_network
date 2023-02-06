let initialState = {
    userData: [
        {id: 1, name: 'Шлепок'},
        {id: 2, name: 'Шлепун'},
        {id: 3, name: 'Шептун'},
        {id: 4, name: 'Булгур'},
        {id: 5, name: 'Кулпа'},
        {id: 6, name: 'Жепок'},
    ],
    messagesData: [
        {id: 1, message: 'Шлепок', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'input', senderName: 'he'},
        {id: 2, message: 'Шлепун', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'output', senderName: 'you'},
        {id: 3, message: 'Шептун', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'input', senderName: 'he'},
        {id: 4, message: 'Булгур', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'output', senderName: 'you'},
        {id: 5, message: 'Кулпа', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'input', senderName: 'he'},
        {id: 6, message: 'Жепок', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'output', senderName: 'you'},
        {id: 1, message: 'Шлепок', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'input', senderName: 'he'},
        {id: 2, message: 'Шлепун', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'output', senderName: 'you'},
        {id: 3, message: 'Шептун', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'input', senderName: 'he'},
        {id: 4, message: 'Булгур', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'output', senderName: 'you'},
        {id: 5, message: 'Кулпа', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'input', senderName: 'he'},
        {id: 6, message: 'Жепок', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'output', senderName: 'you'},
        {id: 1, message: 'Шлепок', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'input', senderName: 'he'},
        {id: 2, message: 'Шлепун', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'output', senderName: 'you'},
        {id: 3, message: 'Шептун', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'input', senderName: 'he'},
        {id: 4, message: 'Булгур', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'output', senderName: 'you'},
        {id: 5, message: 'Кулпа', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'input', senderName: 'he'},
        {id: 6, message: 'Жепок', date: '1 мар. 2020 12:02', avatarLink: 'empty', status: 'output', senderName: 'you'},
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {...state}
    switch (action.type) {
        case 'SEND-MESSAGE' :
            let newMessage = {
                id: 6,
                message: action.messageText,
                date: '1 мар. 2020 12:02',
                avatarLink: 'empty',
                status: 'output',
                senderName: 'you'
            }
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage)
            stateCopy.newMessageBody = ''

            return stateCopy
            break
        case 'SEND-MESSAGE-UPDATER' :
            stateCopy.newMessageBody = action.body
            return stateCopy
            break
        default:
            return state

    }
}

export const sendMessageActionCreator = (messageText) => ({ type: 'SEND-MESSAGE', messageText: messageText })
export const sendMessageUpdater = (messageText) => ({ type: 'SEND-MESSAGE-UPDATER', messageText: messageText })

export default dialogsReducer