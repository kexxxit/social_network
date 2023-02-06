import {userAPI} from "../../api/api";

const SET_USER_DATA = 'SET-USER-DATA'
const SET_USER_LOGIN_DATA = 'SET-USER-LOGIN-DATA'
const INPUT_EMAIL_UPDATER = 'INPUT-LOGIN-UPDATER'
const INPUT_PASSWORD_UPDATER = 'INPUT-PASSWORD-UPDATER'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    password: null,
    rememberMe: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data

            }
        case SET_USER_LOGIN_DATA:
            return {
                ...state,
                ...action.data
            }
        case INPUT_PASSWORD_UPDATER :
            return {
                ...state,
                password: action.text
            }
        case INPUT_EMAIL_UPDATER :
            return {
                ...state,
                email: action.text
            }

        default:
            return state

    }
}



export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})
export const setUserLoginData = (email, password, rememberMe) => ({type: SET_USER_LOGIN_DATA, data: {email, password, rememberMe}})
export const inputEmailUpdater = (text) => ({ type: INPUT_EMAIL_UPDATER, text })
export const inputPasswordUpdater = (text) => ({ type: INPUT_PASSWORD_UPDATER, text })

export const auth = () => {
    return (dispatch) => {
        userAPI.login().then(response => {
            if (response.resultCode === 0) {
                let {id, email, login} = response.data
                dispatch(setUserData(id, email, login, true))
            }
        })
    }
}

export const loginData = (email, password, rememberMe) => {
    return dispatch => {
        return userAPI.auth(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(auth())
            } else {
                return(response.data)
            }
        })
    }
}

export const logoutData = () => {
    return dispatch => {
        userAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
}


export default authReducer