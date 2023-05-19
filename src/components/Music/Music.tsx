import React from 'react';
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

