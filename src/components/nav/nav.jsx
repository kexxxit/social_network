import styles from './nav.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
function Nav(props) {
    return (
        <nav className={styles.nav}>
            <NavLink className={({ isActive }) => (isActive ? styles.activated : undefined)} to={`/profile`}>Profile</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.activated : undefined)} to='/messages'>Messages</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.activated : undefined)} to='/users'>Users</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.activated : undefined)} to='@'>News</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.activated : undefined)} to='@'>Music</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.activated : undefined)} to='@'>Settings</NavLink>
        </nav>
    )
}

export default Nav