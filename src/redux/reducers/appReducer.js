import {auth} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESSFUL'

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                initialized: true
            }
        default:
            return state
    }
}

export const setInitialized = () => ({type: INITIALIZED_SUCCESS})

export const initialize = () => {
    return (dispatch) => {
        let promise = dispatch(auth())
        Promise.all([promise]).then(() => {
            dispatch(setInitialized())
        })
    }
}

export default appReducer