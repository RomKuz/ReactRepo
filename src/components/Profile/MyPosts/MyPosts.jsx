import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import NewPostContainer from "./NewPost/NewPostContainer";


//!TODO rendering after request to DB

//Rendering posts elements from state (hardocoded still)
const MyPosts = (props) => {
    const postsData = props.profilePage.postsData
    let postElements = postsData.map(p=> <Post message={p.post} likeCounter={p.likes} key={p.id} id={p.id} />)
    return (
        <div className={s.post_wrapper}>
            <NewPostContainer/>
            {postElements}
        </div>
    )
}

export default MyPosts