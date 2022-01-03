import { useEffect } from "react";
import style from "components/Player.module.css"

const audio = new Audio();

const Player = ({usr, isPlay, curPlay, playOrStop, setCurPlay}) => {
    console.log(usr);
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
        </div>
    )
}

export default Player;