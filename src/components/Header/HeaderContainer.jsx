import React, {useEffect, useState} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {authMe} from "../../api/api";


const HeaderContainer = (props)=>{

    //Sending request with cookie to auth user and set login in state
    useEffect(()=>{
        authMe().then(data => {
        if(data.resultCode === 0){
            const {id, email,login} = data.data
                props.setAuthUserData(id, email,login)
        }
        })
    },[])

    return   <Header {...props} />
}

let mapStateToProps = (state)=>({
        isAuthed: state.auth.isAuthed,
        login: state.auth.login
    })

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)