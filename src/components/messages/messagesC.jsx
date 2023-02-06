import styles from './messages.module.css'
import Contact from "./contact/contact";
import Message from "./message/message";
import React from "react";

let Messages = (props) => {
    let messageText = React.createRef()
    let contacts = props.messagesPage.userData.map(contact => <Contact name={contact.name}/>)
    let messages = props.messagesPage.messagesData.map(elem => <Message sender={elem.senderName} message={elem.message} status={elem.status}/>)


    return (
        <div className={styles.messages}>
            <div className={styles.contacts}>
                {contacts}
            </div>
            <div className={styles.dialog}>
                <div className={styles.dialog__inner}>
                    {messages}
                </div>

            </div>
            <div className={styles.messages__control}>
                <textarea value={props.messagesPage.newMessageBody} onChange={props.onNewMessageChange} ref={messageText}></textarea>
                <button onClick={() => {props.sendMessage(messageText)}}>SEND</button>
            </div>
        </div>
    )

}

export default Messages