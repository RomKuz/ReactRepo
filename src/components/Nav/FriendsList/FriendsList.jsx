import s from './FriendsList.module.css'
import React from "react";


const FriendsList = (props) => {

    return (
        <div className={s.item}>{props.name}</div>
    )
}

export default FriendsList;