import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";

// import {followUser, unfollowUser} from "../../api/api";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div>
            <div className={s.pageCounterContainer}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            <div>{props.usersData.map(u => <div key={u.id}>
                <div className={s.wrapper}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.avatar} src={u.photos.small != null ? u.photos.small : userPhoto}
                                     alt="#"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollowUser(u.id)
                                }}> Unfollow
                                </button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.followUser(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.info}>
                        <div>
                            <div className={s.name}>
                                {u.name}
                            </div>
                            <div className={s.status}>
                                {u.status}
                            </div>
                        </div>
                        <div>
                            <div className={s.country}>
                                {'u.location.country'}
                            </div>
                            <div>
                                {"u.location.city"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}</div>
        </div>)
}
export default Users