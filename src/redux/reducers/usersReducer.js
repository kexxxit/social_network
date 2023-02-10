import {userAPI} from "../../api/api";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING = 'users/TOGGLE-IS-FOLLOWING'

let initialState = {
    users: [],
    pageSize: 36,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: true,
    followingList: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
            break
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
            break
        case SET_USERS :
            return {...state, users: action.users}
        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT :
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING :
            return {
                ...state,
                followingList: action.isFollowingProgress ? [...state.followingList, action.userId] : state.followingList.filter(id => id != action.userId)
            }
        default:
            return state

    }
}

export const followSuccess = (id) => ({type: FOLLOW, userID: id})
export const unfollowSuccess = (id) => ({type: UNFOLLOW, userID: id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFollowingProgress = (isFollowingProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING,
    isFollowingProgress: isFollowingProgress,
    userId: userId
})

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        let response = await userAPI.getUsers(page, pageSize)
        dispatch(setIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setUsersTotalCount(response.totalCount))

    }
}

export const setPage = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(page))
        let response = await userAPI.getUsers(page, pageSize)
        dispatch(setIsFetching(false))
        dispatch(setUsers(response.items))

    }
}

const followUnfollowLogic = async (dispatch, id, Action, apiMethod) => {
    dispatch(setFollowingProgress(true, id))
    let response = await apiMethod(id)
    if (response.data.resultCode === 0) {
        dispatch(Action(id))
    }
    dispatch(setFollowingProgress(false, id))

}

export const follow = (id) => {
    return async (dispatch) => {
        followUnfollowLogic(dispatch,id,userAPI.postFollow.bind(userAPI),followSuccess)
    }
}

export const unfollow = (id) => {
    return async (dispatch) => {
        followUnfollowLogic(dispatch, id, userAPI.deleteFollow.bind(userAPI), unfollowSuccess())
    }
}

export default usersReducer