import './App.css';
import React from "react";

import {Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Nav from "./components/Nav/Nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import ProfileContainerHook from "./components/Profile/ProfileContainerHook";
import HeaderContainer from "./components/Header/HeaderContainer";


import UsersHookContainer from "./components/Users/UsersContainerHook";


const App = () => {

    return (
        <div className="app_wrapper">
            <HeaderContainer/>
            <Nav/>
            <div className="app_wrapper_content">

                {/*Routes */}

                <Routes>
                    <Route path='/profile/:userId' element={<ProfileContainerHook/>}/>
                    <Route path='/dialogs/' element={<DialogsContainer />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/users' element={<UsersHookContainer/>}/>

                </Routes>
            </div>

        </div>

    );
}


export default App;
