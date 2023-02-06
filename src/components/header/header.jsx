import styles from "./header.module.css"
import React from "react";
import {NavLink} from "react-router-dom";

function Header(props) {

    return (
        <header className={styles.header}>
            <img className={styles.logo} src="https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png"/>
            <div className={styles.login__block }>
                {props.isAuth ? <div><div>{props.login}</div><button onClick={props.logoutData}>Logout</button></div> : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    )
}

export default Header