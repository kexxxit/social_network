import {profileAPI} from "../../api/api";

const ADD_POST = 'profile/ADD-POST'
const SET_USER = 'profile/SET-USER'
const SET_STATUS = 'profile/SET_STATUS'

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
        case ADD_POST :
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
                postData: [newPost, ...state.postData]
            }
            break
        case SET_USER :
            let data = action.data
            let newState = {...state, data}
            return newState
        case SET_STATUS :
            return {
                ...state,
                status: action.status
            }
        default:
            return state

    }
}

export const addPostActionCreator = (postContent) => ({type: ADD_POST, postContent: postContent})
export const setUserActionCreator = (data) => ({type: SET_USER, data: data})
export const setStatusActionCreator = (status) => ({type: SET_STATUS, status})

export const setUser = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserActionCreator(response))
    }
}

export const addNewPost = (postContent) => {
    return (dispatch) => {
        dispatch(addPostActionCreator(postContent))
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatusActionCreator(response.data))

    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusActionCreator(status))
        }

    }
}

export default profileReducer