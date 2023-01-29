import React, {useEffect, useState} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {getProfileById} from "../../api/api";

const ProfileContainerHook = (props)=>{
   let {userId}= useParams()
    if (!userId) userId=2;

    //Set user profile to state after axios request to the DB
    useEffect(()=>{
        getProfileById(userId).then(data => {
           props.setUserProfile(data)
        })
    },[])

    //Rendering profile comp
    return   <Profile {...props} profile={props.profile}/>
}

let mapStateToProps = (state)=>(
    {profile:state.profilePage.profile}
)

//Wrapper for a ProfileContainerHook comp
export default connect(mapStateToProps, {setUserProfile})(ProfileContainerHook)