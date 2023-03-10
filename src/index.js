import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";


import App from "./App";
// import store from "./redux/store";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

// const rerenderEntireTree =(state)=>{

    root.render(
        <Router>
            <React.StrictMode>
                <Provider store={store}>
                <App />
                </Provider>
            </React.StrictMode>

        </Router>);
// }
// rerenderEntireTree(store.getState())
// store.subscribe(()=>{
//     let state = store.getState()
//     rerenderEntireTree(state)
// })
//


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
