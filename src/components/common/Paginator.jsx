import React, {useEffect, useState} from "react";
import styles from "./Paginator.module.css"

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 20}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize),
        portionsCount = Math.ceil(pagesCount/portionSize),
        [portion, setPortion] = useState(1),
        leftEdgePortionNum = (portion - 1) * portionSize + 1,
        rightEdgePortionNum = portion * portionSize

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={styles.page__control}>
        {portion > 1 &&  <button onClick={() => setPortion(portion - 1)}>Prev</button>}
        {
            pages.filter(p => p >= leftEdgePortionNum && p<= rightEdgePortionNum)
                .map(page => {
                return <span onClick={(e) => {
                    onPageChanged(page)
                }} className={currentPage === page && styles.selected__page}>{page}</span>
            })
        }
        {portion < portionsCount && <button onClick={() => setPortion(portion + 1)}>Next</button>}
    </div>
}

export default Paginator