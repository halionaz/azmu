import { useEffect } from "react";
import style from "components/Player.module.css"

const audio = new Audio();

const Player = ({usr, isPlay, curPlay, playOrStop, setCurPlay}) => {
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
                <strong>현재곡 : {curPlay ? (curPlay.name) : "없음"}</strong>
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