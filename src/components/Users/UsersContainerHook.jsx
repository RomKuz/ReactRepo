import {connect} from "react-redux";
import React, {useEffect} from "react";
import {
    followUser,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    unfollowUser
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

const UsersHookContainer = (props) => {
    useEffect(() => {
        props.toggleIsFetching(true)
        getUsers(props.currentPage, props.pageSize).then(data => {
            props.toggleIsFetching(false)
            props.setUsers(data.items)
        })
    }, [])
    const useEventListener = (pageNumber) => {
        props.toggleIsFetching(true)
        props.setCurrentPage(pageNumber);
        getUsers(pageNumber, props.pageSize).then(data => {
            props.toggleIsFetching(false)
            props.setUsers(data.items)
        })
    }
    return (
        <>
            {props.usersPage.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={props.usersPage.totalUsersCount}
                   pageSize={props.usersPage.pageSize}
                   currentPage={props.usersPage.currentPage}
                   usersData={props.usersPage.usersData}

                   onPageChanged={useEventListener}
                   unfollowUser={props.unfollowUser}
                   followUser={props.followUser}
                   toggleIsFetching={props.toggleIsFetching}
            />
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,


    }
}


export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching
})(UsersHookContainer)


