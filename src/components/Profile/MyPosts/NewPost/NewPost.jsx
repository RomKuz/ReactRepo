import React from "react";
import s from './NewPost.module.css'

const NewPost = (props) => {

    let newPostElement = React.createRef()

    //Event on adding post to use callback and dispatch changes
    let addPost = () => {
        props.addPost();
    }

    //Event on editing text area to use callback and dispatch changes
    let postOnChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }
    return (
        <div className={s.postsBlock}>
            <div>
                <textarea
                    onChange={postOnChange}
                    ref={newPostElement}
                    value={props.newPostText}
                    placeholder='Enter your message'/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

        </div>


    )
}

export default NewPost