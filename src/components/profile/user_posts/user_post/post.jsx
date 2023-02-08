import styles from "../profile.module.css";
import postImg from "./qYayTIyBR68.jpg";
import React from "react"

const Post = React.memo((props) => {

    return (
        <div className={styles.post}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
                <div>
                    <div>Name Surename</div>
                    <div className={styles.status}>был жив 2 мин. назад</div>
                </div>
            </div>
            <h4>{props.textContent}</h4>
            <img className={styles.postImg} src={postImg}/>
            <br/>
            <img className={styles.likeImg} src="https://clipart-best.com/img/like/like-clip-art-18.png"/>
            <img className={styles.likeImg} src='http://cdn.onlinewebfonts.com/svg/img_118478.png'/>
        </div>
    )
})

export default Post