import React from "react";
import s from './Post.module.css'

const Post = (props) => {


    return (
        <div>
            <div className={s.item}>
               <p>{props.message}</p>

            </div>
            <div><span>{props.likeCounter} likes</span></div>
        </div>
    )
}

export default Post