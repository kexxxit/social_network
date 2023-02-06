import {profileAPI} from "../../api/api";

let initialState = {
    postData: [{
        id: '1',
        likesCount: 100,
        repostCount: 100,
        comments: [],
        imgUrl: 'empty',
        date: '01.10.2020',
        text: ''
    },
        {id: '2', likesCount: 100, repostCount: 100, comments: [], imgUrl: 'empty', date: '01.10.2020', text: 'qwe'},
        {id: '3', likesCount: 100, repostCount: 100, comments: [], imgUrl: 'empty', date: '01.10.2020', text: 'eqwe'}],
    friendsData: [
        {id: '1', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
        {id: '2', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
        {id: '3', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
        {id: '4', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
        {id: '5', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
        {id: '6', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
        {id: '7', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
        {id: '8', avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'},
    ],
    data: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST' :
            let newPost = {
                id: '4',
                likesCount: 0,
                repostCount: 0,
                comments: [],
                imgUrl: 'empty',
                date: '01.10.2020',
                text: action.postContent
            }

            return {
                ...state,
                postData: [newPost,...state.postData]
            }
            break
        case 'SET-USER' :
            let data = action.data
            let newState = {...state, data}
            return newState
        case 'SET-STATUS' :
            return {
                ...state,
                status: action.status
            }
        default: return state

    }
}

export const addPostActionCreator = (postContent) => ({ type: 'ADD-POST', postContent: postContent })
export const setUserActionCreator = (data) => ({type: 'SET-USER', data: data})
export const setStatusActionCreator = (status) => ({type: 'SET-STATUS', status})

export const setUser = (userId) => {
     return (dispatch) => {
         profileAPI.getProfile(userId).then(response => {
             dispatch(setUserActionCreator(response))
         })
     }
}

export const addNewPost = (postContent) => {
    return (dispatch) => {
        dispatch(addPostActionCreator(postContent))
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusActionCreator(response.data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusActionCreator(status))
            }
        })
    }
}

export default profileReducer