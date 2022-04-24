import { useEffect, useState } from "react";
import style from "components/Player.module.css"

const audio = new Audio();

const Player = ({usr, isPlay, curPlay, playOrStop, setCurPlay}) => {
    const [volumeBtnActive, setVolumeBtnActive] = useState(false);
    useEffect(()=>{
        if(curPlay){
            audio.src = curPlay.musicsrc;
        }
    }, [curPlay]);
    useEffect(() => {
        if(curPlay){
            if(isPlay){
                audio.play();
            } else {
                audio.pause();
            }
        }
    }, [isPlay, curPlay]);
    const playBtnClicked = () => {
        if(curPlay){
            playOrStop();
        }
    }
    const volumeBtnClicked = () => {
        setVolumeBtnActive((cur) => {
            return !cur;
        });
    }
    return (
        <div className={style.player}>
            <div className={style.track}>
                {curPlay ? (
                    <img src={curPlay.imgsrc} alt={`Current Play music ${curPlay.name}'s Cover`} className={style.img}></img>
                ) : (
                    <div className={`${style.img} ${style.grayimg}`} />
                )}
                <div className={style.trackInfo}>
                    <p className={style.title}>{curPlay ? (curPlay.name) : "없음"}</p>
                    <p className={style.artist}>{curPlay ? (curPlay.artist) : (usr ? usr.displayName : "")}</p>
                </div>
            </div>
            <div className={style.controller}>
                <span className={style.playBtn} onClick={playBtnClicked}>
                    <ion-icon name={isPlay ? "pause" : "play"}></ion-icon>
                </span>
            </div>
            <div className={style.volumeArea}>
                <span className={`${style.volumeBtn} ${volumeBtnActive && style.active}`} onClick={volumeBtnClicked}>
                    <ion-icon name={"volume-medium-outline"}></ion-icon>
                </span>
                <div className={style.progressBar} style={{"display" : (volumeBtnActive ? "block" : "none")}}>
                    <div className={style.rangeArea}>
                        <input className={style.progress} type="range" min="0" max="100"></input>
                        <i className={style.volumeHandle} style={{"left" : "50%"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player;