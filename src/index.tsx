import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import  SamApp from "./App";



ReactDOM.render(
    <SamApp/>,
    document.getElementById('root')
)





