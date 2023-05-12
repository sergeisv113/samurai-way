import React, {useState} from 'react';
import s from './Paginator.module.css';
import cN from "classnames";

type PaginatorType = {
    totalItemsCount: number
    currentPage: number
    pageSize: number
    onChangedPageHandler: (pageNumber: number) => void
    portionSize?: number
}
export const Paginator = ({totalItemsCount, pageSize, onChangedPageHandler, currentPage, portionSize = 5}: PaginatorType) => {


    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPositionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPositionPageNumber = portionNumber * portionSize

    return(
        <div className={s.paginator}>
            {portionNumber > 0 &&
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}

            {pages.filter(p => p >= leftPositionPageNumber && p <= rightPositionPageNumber)
                .map((p) => {
                return (
                <span className={cN({[s.selectedPage] : currentPage === p},
                s.pageNumber)}
                      key={p}
                      onClick={e => {
                          onChangedPageHandler(p)
                      }}>{p}</span>)
            })}

            {portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
};

