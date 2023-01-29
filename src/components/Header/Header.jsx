import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = (props)=>{

    return (
        <header className={s.header}>
            <img
                src="https://img.freepik.com/free-vector/crypto-mining-logo-template_23-2149402203.jpg?w=826&t=st=1659104457~exp=1659105057~hmac=322750362622bf179cb930702985691755307ecd5719000c72242ce81308f1d7"
                alt=""/>
            <div className={s.login}>
                {/*LOGIN BUTTON*/}
                {props.isAuthed? props.login :
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header