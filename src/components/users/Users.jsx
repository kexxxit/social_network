import React from "react";
import styles from "./users.module.css";
import Preloader from "../common/Preloader";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator";

let Users = (props) => {

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
        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
    </div>
}

export default Users