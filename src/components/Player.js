import { useEffect } from "react";

const audio = new Audio();

const Player = ({isPlay, curPlay, playOrStop, setCurPlay}) => {
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
        <div>
            <strong>현재곡 : {curPlay ? (curPlay.name) : "없음"}</strong>
            <br></br>
            <button onClick={playBtnClicked} >{isPlay ? "정지" : "재생"}</button>
        </div>
    )
}

export default Player;