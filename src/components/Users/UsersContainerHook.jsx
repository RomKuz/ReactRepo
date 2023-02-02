import {connect} from "react-redux";
import React, {useEffect} from "react";
import {
    followSuccess, followUser, getSetUser, toggleFollowingInProgress, unfollowSuccess, unfollowUser
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


const UsersHookContainer = (props) => {
    //On page init
    useEffect(() => {
        props.getSetUser(props.usersPage.currentPage, props.usersPage.pageSize)
    }, [])

    //On Page Change
    const useOnPageChange = (pageNumber) => {
        props.getSetUser(pageNumber, props.usersPage.pageSize)
    }

    const useFollowListener = (userId) => {
        props.followUserById(userId)
    }
    const useUnFollowListener = (userId) => {
        props.unFollowUserById(userId)
    }

    return (<>
        {props.usersPage.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={props.usersPage.totalUsersCount}
               pageSize={props.usersPage.pageSize}
               currentPage={props.usersPage.currentPage}
               usersData={props.usersPage.usersData}
               followingInProgress={props.usersPage.followingInProgress}

               followUser={useFollowListener}
               unfollowUser={useUnFollowListener}
               onPageChanged={useOnPageChange}



        />
    </>)
}


const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,


    }
}


export default connect(mapStateToProps, {
    followUser: followSuccess, unfollowUser: unfollowSuccess, toggleFollowingInProgress, //Thunks
    getSetUser, followUserById: followUser, unFollowUserById: unfollowUser

})(UsersHookContainer)


