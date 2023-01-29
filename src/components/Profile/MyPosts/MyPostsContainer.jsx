import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// Passing state to props using react-redux
const mapStateToProps = (state)=>{
    return {
        profilePage:state.profilePage,
    }
}
// Passing callbacks to props using react-redux

const mapDispatchToProps = (dispatch)=>{
    return {}
}

//Creating wrapper for MyPosts comp with react-redux lib
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer