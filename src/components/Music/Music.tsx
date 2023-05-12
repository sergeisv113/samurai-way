import React from 'react';
import s from  './Music.module.css'
import {Separator} from "../common";
import {Player} from "./Player";

export const Music = () => {
    return (
       <>
           <div>
               <Separator title={'Music'}/>
           </div>
           <div>
                <Player/>
           </div>
       </>
    );
};

