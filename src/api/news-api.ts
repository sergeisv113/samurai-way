// Api
import axios from "axios";
import {CommentType} from "../redux/news-reducer";

export const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.ru/api/'})

export const commentsAPI = {
    getComments() {
        return instance.get<CommentType[]>('comments')
    }
}