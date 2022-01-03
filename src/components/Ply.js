// import { useEffect } from "react";
import style from "components/Ply.module.css";

const Ply = ({music, curPlay, setCurPlay, isPlay}) => {
    const start = () => {
        if(!curPlay || curPlay.name !== music.name){
            setCurPlay(music);
        }
    }
    return (
        <div onClick={start} style={{"cursor" : "pointer"}}>
            <img src={music.imgsrc} alt={`${music.name} Album Cover`} className={style.img}></img>
            <div>{music.name}</div>
            <div>{music.artist}</div>
        </div>
    )
}

export default Ply;