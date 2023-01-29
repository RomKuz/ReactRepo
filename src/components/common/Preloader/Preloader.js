import preloader from "../../../assets/preloader/preloader.svg";
import React from "react";
import s from './Preloader.module.css'

//Preloader for all comps with requests and etc
let Preloader = (props)=>{
    return    <img src={preloader} className={s.preloader}/>
}


export default Preloader