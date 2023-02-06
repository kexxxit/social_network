import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";

let store = {
    _state : {
        profilePage: {
            postData: [
                {
                    id: '1',
                    likesCount: 100,
                    repostCount: 100,
                    comments: [],
                    imgUrl: 'empty',
                    date: '01.10.2020',
                    text: ''
                },
                {
                    id: '2',
                    likesCount: 100,
                    repostCount: 100,
                    comments: [],
                    imgUrl: 'empty',
                    date: '01.10.2020',
                    text: 'dasdas'
                },
                {
                    id: '3',
                    likesCount: 100,
                    repostCount: 100,
                    comments: [],
                    imgUrl: 'empty',
                    date: '01.10.2020',
                    text: 'dds'
                }],
            friendsData: [
                {id: '1', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
                {id: '2', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
                {id: '3', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
                {id: '4', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
                {id: '5', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
                {id: '6', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
                {id: '7', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
                {id: '8', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
            ]
        },
        messagesPage: {
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
    },
    _renderTree() {},
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._renderTree = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._renderTree(this._state)
    }
}




export default store