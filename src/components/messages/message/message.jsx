import styles from './message.module.css'
import React from "react";
const Message = (props) => {
    if (props.status == 'input') {
        return(
            <div className={`${styles.message}`}>
                <img className={styles.message__avatar} src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
                <div >
                    <h4>{props.sender}</h4>
                    <h4>{props.message}</h4>
                </div>
            </div>
        )
    } else {
        return(
            <div className={`${styles.message} ${styles.message__output}`}>
                <img className={styles.message__avatar} src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
                <div>
                    <h4>{props.sender}</h4>
                    <h4>{props.message}</h4>
                </div>

            </div>
        )
    }

}

export default Message