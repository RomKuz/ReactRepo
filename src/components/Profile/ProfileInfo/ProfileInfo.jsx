import React from "react";
import s from './ProfileInfo.module.css'

import Preloader from "../../common/Preloader/Preloader";

//RENDERING USER PAGE INFO USING ID AFTER Response
const ProfileInfo = (props) => {



    if(!props.profile){
        return (<Preloader/>)
    }



    return (
        <div className={s.wrapper}>

        <div className={s.flex_container}>
            <div className={s.img_wrapper}>
                <img
                    src={props.profile.photos.large}
                    alt=""/>
                <div className={s.userName}>{props.profile.fullName}</div>
            </div>
            <div className={s.flex_item}> {props.profile.aboutMe}</div>


        </div>
    <div className={s.jobInfoContainer}>
        {/*USER JOB INFO FROM RESPONSE*/}
        {props.profile.lookingForAJob ? <div className={s.lookingForAJob}>{props.profile.lookingForAJob}
            {props.profile.lookingForAJobDescription}
        </div> : null}

    </div>
            <ul className={s.contacts}>
                    {/*USER CONTACTS INFO FROM RESPONSE*/}
                    {props.profile.contacts.facebook && <li className={s.contactsElement}>{props.profile.contacts.facebook}</li> }
                    {props.profile.contacts.github && <li className={s.contactsElement}>{props.profile.contacts.github}</li>}
                    {props.profile.contacts.instagram && <li className={s.contactsElement}>{props.profile.contacts.instagram}</li> }
                    {props.profile.contacts.mainLink && <li className={s.contactsElement}>{props.profile.contacts.mainLink}</li> }
                    {props.profile.contacts.twitter && <li className={s.contactsElement}>{props.profile.contacts.twitter}</li> }
                    {props.profile.contacts.vk && <li className={s.contactsElement} >{props.profile.contacts.vk}</li>}
                    {props.profile.contacts.website && <li className={s.contactsElement}>{props.profile.contacts.website}</li> }
                    {props.profile.contacts.youtube && <li className={s.contactsElement}>{props.profile.contacts.youtube}</li> }


            </ul>
</div>
    )
}

export default ProfileInfo