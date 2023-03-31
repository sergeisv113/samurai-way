import React from 'react';
import s from './Paginator.module.css';
import classNames from "classnames";

type PaginatorType = {
    totalUserCount: number
    currentPage: number
    pageSize: number
    setCurrentPage: (currentPage: number) => void
}
export const Paginator = (props: PaginatorType) => {
    const {
        totalUserCount,
        currentPage,
        pageSize,
        setCurrentPage,
    } = props

    const pagesCount = Math.ceil(totalUserCount / pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return(
        <div className={s.selectedPageBlock}>
                {pages.map((p, index) => {
                     return (
                        <span key={index}
                            onClick={(e) => setCurrentPage(p)}
                              className={classNames({[s.selectedPage] : p === currentPage })}>{p}</span>)
                })}
            </div>
    )
};

