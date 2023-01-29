import usersReducer from "./usersReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postsData: [
        {id: 1, post: 'Hi, how r u', likes: 0},
        {id: 2, post: 'My 1st psot', likes: 0},
        {id: 3, post: 'qweszxc', likes: 0},
        {id: 4, post: 'Saska', likes: 0},
        {id: 5, post: 'QWe', likes: 0},
        {id: 6, post: 'wwww', likes: 0},
        {id: 7, post: 'Sezxczxcx 7', likes: 0}
    ],
    newPostText: '',
    profile:null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let post = state.newPostText
            return {
                ...state,
                newPostText: '',
                postsData: [
                    ...state.postsData,
                    {id: 9, post: post, likes: 0}]
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {...state, profile:action.profile}
        default :
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer