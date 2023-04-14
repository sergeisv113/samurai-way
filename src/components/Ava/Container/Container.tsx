import React, {ReactNode} from 'react';
import s from './Container.module.scss'


export interface ContainerPropsType {
    children: ReactNode
}
export function Container({children}: ContainerPropsType) {
    return (
        <div className={s.container}>
            {children}
        </div>
    )
}