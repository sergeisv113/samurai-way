import React, {useEffect} from 'react';
import s from './News.module.css'
import {Separator} from "../common";
import { useDispatch } from 'react-redux';

import {getCommentsTC} from "../../redux/news-reducer";
import {useAppSelector} from "../../redux/store";


export const News = () => {
    const news = useAppSelector(state => state.news)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCommentsTC())
    }, [])

    return (
        <>
            <div className={s.newsContainer}>
                <Separator title={'News'}/>
            </div>
            <div>
                        <h1>📝 Список новостей</h1>
                    {
                        news.map(n => {
                        return <div key={n.id}
                        className={s.news}><b>NEWS:  </b>: {n.body} </div>
                    })
                    }
            </div>
        </>
    );
};

