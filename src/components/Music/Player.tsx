import React from 'react';
import {useEffect, useState} from "react";
import useSound from "use-sound";
import {AiFillPlayCircle, AiFillPauseCircle} from "react-icons/ai";
import {BiSkipNext, BiSkipPrevious} from "react-icons/bi";
import {IconContext} from "react-icons";
import s from './Player.module.css'

// @ts-ignore
import qala from '../../assets/gala.mp3'


export const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState({
        min: "",
        sec: ""
    });
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: ""
    });

    const [seconds, setSeconds] = useState();

    const [play, {pause, duration, sound}] = useSound(qala);

    useEffect(() => {
        if (duration) {
            const sec: any = duration / 1000;
            const min: any = Math.floor(sec / 60);
            const secRemain: any = Math.floor(sec % 60);
            setTime({
                min: min,
                sec: secRemain
            });
        }
    }, [isPlaying]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([]));
                const min: any = Math.floor(sound.seek([]) / 60);
                const sec: any = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                    min,
                    sec
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

    const playingButton = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    };

    return (
        <div className={s.component}>
            <h2>Playing Now</h2>
            <img className={s.musicCover} src="https://picsum.photos/200/200"/>
            <div>
                <h3 className={s.title}>Ruba</h3>
                <p className={s.subTitle}>Qala</p>
            </div>
            <div>
                <div className={s.time}>
                    <p>
                        {currTime.min}:{currTime.sec}
                    </p>
                    <p>
                        {time.min}:{time.sec}
                    </p>
                </div>
                <input
                    type="range"
                    min="0"
                    // @ts-ignore
                    max={duration / 1000}
                    // @ts-ignore
                    default="0"
                    value={seconds}
                    className={s.timeline}
                    onChange={(e) => {
                        sound.seek([e.target.value]);
                    }}
                />
            </div>
            <div>
                <button className={s.playButton}>
                    <IconContext.Provider value={{size: "3em", color: "#27AE60"}}>
                        <BiSkipPrevious/>
                    </IconContext.Provider>
                </button>
                {!isPlaying ? (
                    <button className={s.playButton} onClick={playingButton}>
                        <IconContext.Provider value={{size: "3em", color: "#27AE60"}}>
                            <AiFillPlayCircle/>
                        </IconContext.Provider>
                    </button>
                ) : (
                    <button className={s.playButton} onClick={playingButton}>
                        <IconContext.Provider value={{size: "3em", color: "#27AE60"}}>
                            <AiFillPauseCircle/>
                        </IconContext.Provider>
                    </button>
                )}
                <button className={s.playButton}>
                    <IconContext.Provider value={{size: "3em", color: "#27AE60"}}>
                        <BiSkipNext/>
                    </IconContext.Provider>
                </button>
            </div>
        </div>
    );
}
