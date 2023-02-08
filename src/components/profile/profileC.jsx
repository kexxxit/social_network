import styles from './user_posts/profile.module.css'
import Post from "./user_posts/user_post/post";
import React from "react";
import Friends from "../messages/friends";
import ProfileStatusWithHook from "./profileStatusWithHook";

let Profile = (props) => {
    let postContent = React.createRef()
    let friends = props.profilePage.friendsData.map(friend => <Friends avatar={friend.avatarUrl}/>)
    let posts = props.profilePage.postData.map(post => <Post textContent={post.text} addPost={props.addNewPost}/>)

    return (
        <div className={styles.profile}>
            <div className={styles.profile__left}>
                <div className={styles.avatar}>
                    <img src={props.data === null ? '' : props.data.photos.large}/>
                </div>
                <div className={styles.profile__friends}>
                    <h4 className={styles.friends__label}>Fridens</h4>
                    <div className={styles.friends__list}>
                        {friends}
                    </div>
                </div>
            </div>
            <div className={styles.page}>
                <div className={styles.profile__main}>
                    <div className={styles.profile__container}>
                        <div className={styles.profile__name}>
                            <h1>{props.data === null ? '' : props.data.fullName}</h1>
                            <ProfileStatusWithHook status={props.status} updateStatus = {props.updateStatus}/>
                        </div>
                        <div>
                            <div className={styles.profile__info}>
                                <h3 className={styles.profile__label}>День рождения</h3>
                                <h3 className={styles.profile__value}>1 марта</h3>
                            </div>
                            <div className={styles.profile__info}>
                                <h3 className={styles.profile__label}>Город</h3>
                                <h3 className={styles.profile__value}>Красноярск</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.add__post}>
                    <textarea ref={postContent}></textarea>
                    <button onClick={(e) => {props.addNewPost(postContent); postContent.current.value = ''}}>Опубликовать</button>
                </div>
                <div className={styles.posts}>
                    {posts}
                </div>
            </div>
            <div className={styles.comments}>
                nnsdgsdgf
            </div>
        </div>
    )

}

export default Profile