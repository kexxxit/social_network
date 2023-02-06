import styles from './contact.module.css'
import avatarImg from '../message/avatar.jpg'
import React from "react";
import {NavLink} from "react-router-dom";
const Contact = (props) => {
    if (props.status == '1') {
        return (
            <NavLink to="/messages/1">
                <div>
                    <div className={`${styles.contact} ${styles.active}`}>
                        <img src={avatarImg}/>
                        <div>
                            <div>{props.name}</div>
                            <div className={styles.lastMsg}>Привет!</div>
                        </div>
                    </div>
                </div>
            </NavLink>
        )

    } else {
        return (
            <NavLink to="/messages/1">
                <div>
                    <div className={`${styles.contact}`}>
                        <img src={avatarImg}/>
                        <div>
                            <div>{props.name}</div>
                            <div className={styles.lastMsg}>Привет!</div>
                        </div>
                    </div>
                </div>
            </NavLink>
        )
    }
}

export default Contact