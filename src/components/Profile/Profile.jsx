import React from "react";
import BgImage from "./BG-image/BG-image";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

//Rendering profile page
const Profile = (props) => {

    return (
        <div>
            {/*Background profile image   !!!TODO */}
            <BgImage/>
            {/*User profile info !!!TODO*/}
            <ProfileInfo profile={props.profile}/>

            <MyPostsContainer profile={props.profile}/>
        </div>
    )
}

export default Profile