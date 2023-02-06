import React from "react";
import styles from "./users.module.css";
import Preloader from "../common/Preloader";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }
    return <div className={styles.users__page}>

        <div className={styles.users}>
        {
            props.users.map(u =>
                <div  className={styles.user}>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={styles.avatar}
                            src={u.photos.small != null ? u.photos.small : 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'}/>
                    </NavLink>
                    <div className={styles.user__info}>
                        <div>
                            <div>{u.name} {'u.surname'}</div>
                            <div className={styles.user_friendsCount}>{u.mutualFriendsCount} Общих друзей</div>
                        </div>
                        {u.followed ?
                            <button disabled={props.followingList.some(id => id === u.id)} className={styles.follow__button}
                                    onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                            <button disabled={props.followingList.some(id => id === u.id)} className={styles.follow__button}
                                    onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>

                </div>)
        }
    </div>
        <div className={styles.preloader}>
            {props.isFetching ? <Preloader /> : null}
        </div>
        <div className={styles.page__control}>
            {
                pages.map(page => {
                    return <span onClick={(e) => {
                        props.onPageChanged(page)
                    }} className={props.currentPage === page && styles.selected__page}>{page}</span>
                })}
        </div>
    </div>
}

export default Users