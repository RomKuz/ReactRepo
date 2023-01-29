import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = (props) => {

    const dialogsData = props.dialogsPage.dialogsData;
    const messagesData = props.dialogsPage.messagesData;

    const onSendMessageClick = ()=>{
      props.sendMessage()
    }
    const messageInputOnChange = (e)=>{
        let text = e.target.value
         props.messageInputChange(text)
    }

    let dialogsElements = dialogsData
        .map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messageElements = messagesData
        .map(m => <Message message={m.message} key={m.id} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.message_list}>
                {messageElements}

            </div>
            {/*!Message area*/}
            <div>
                <textarea

                          onChange={messageInputOnChange}
                          value={props.dialogsPage.messageInputText}
                          placeholder='Enter your message'></textarea>
                <button onClick={onSendMessageClick} >Send</button>
            </div>
        </div>
    )
}

export default Dialogs