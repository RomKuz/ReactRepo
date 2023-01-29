// const SEND_MESSAGE = 'SEND-MESSAGE'
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let initialState = {
    usersData: [],
    usersOnPage: [],
    pageSize:10,
    totalUsersCount:60,
    currentPage:1,
    isFetching: true,

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:

            return {
                ...state,
                usersData: state.usersData.map(u => {

                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } else return {...u}

                })
            }

        case UNFOLLOW_USER:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }else return {...u}
                })
            }
        case SET_USERS:
            return { ...state, usersData: action.users }
        case SET_CURRENT_PAGE:
            return {...state,currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:

            return {...state,totalUsersCount: action.userCount}
        case TOGGLE_IS_FETCHING:
            return {...state,isFetching: action.isFetching}
        default :
            return state
    }


}
export const setCurrentPage = (currentPage)=>({type:SET_CURRENT_PAGE, currentPage })
export const toggleIsFetching = (isFetching)=>({type:TOGGLE_IS_FETCHING , isFetching})
export const setTotalUserCount = (userCount)=>({type:SET_TOTAL_USER_COUNT, userCount })

export const followUser = (userId) => ({type: FOLLOW_USER, userId})
export const unfollowUser = (userId) => ({type: UNFOLLOW_USER, userId})
export const setUsers = (users) => ({type: SET_USERS,  users})
export default usersReducer