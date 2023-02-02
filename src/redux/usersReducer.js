// const SEND_MESSAGE = 'SEND-MESSAGE'
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
import {deleteFollowUser, getUsers, postFollowUser} from "../api/api";

const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
    usersData: [],
    usersOnPage: [],
    pageSize: 10,
    totalUsersCount: 60,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:

            return {
                ...state, usersData: state.usersData.map(u => {

                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } else return {...u}

                })
            }

        case UNFOLLOW_USER:
            return {
                ...state, usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else return {...u}
                })
            }
        case SET_USERS:
            return {...state, usersData: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:

            return {...state, totalUsersCount: action.userCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId)
            }
        default :
            return state
    }


}
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId
})
export const setTotalUserCount = (userCount) => ({type: SET_TOTAL_USER_COUNT, userCount})
export const followSuccess = (userId) => ({type: FOLLOW_USER, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW_USER, userId})
export const setUsers = (users) => ({type: SET_USERS, users})

//Thunk for async request and dispatch user data
export const getSetUser = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
    })
}
export const followUser = (userId)=>(dispatch)=>{
    dispatch(toggleFollowingInProgress(true, userId))
    postFollowUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
    })
}
export const unfollowUser = (userId)=>(dispatch)=>{
    dispatch(toggleFollowingInProgress(true, userId))
    deleteFollowUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
    })
}

export default usersReducer