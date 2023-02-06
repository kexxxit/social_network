import styles from './messages.module.css'
import Contact from "./contact/contact";
import Message from "./message/message";
import React from "react";

const Messages = (props) => {
    let messageText = React.createRef()
    let sendMessage = () => {
        props.sendMessage(messageText.current.value)

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body)
    }
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
                <textarea value={props.messagesPage.newMessageBody} onChange={onNewMessageChange} ref={messageText}></textarea>
                <button onClick={sendMessage}>SEND</button>
            </div>
        </div>
    )
};

export default Messages