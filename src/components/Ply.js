// import { useEffect } from "react";
import style from "components/Ply.module.css";

const Ply = ({music, curPlay, setCurPlay, isPlay}) => {
    const start = () => {
        if(!curPlay || curPlay.name !== music.name){
            setCurPlay(music);
        }
    }
    return (
        <div className={style.ply} onClick={start} style={{"cursor" : "pointer"}}>
            <img src={music.imgsrc} alt={`${music.name} Album Cover`} className={style.img}></img>
            <div className={style.musicInfo}>
                <div className={style.trackInfo}>
                    <p className={style.title} style={{"color" : ((curPlay && curPlay.name === music.name )? "coral" : "#181818")}}>{music.name}</p>
                    <p className={style.artist} style={{"color" : ((curPlay && curPlay.name === music.name )? "coral" : "#666")}}>{music.artist}</p>
                </div>
            </div>
        </div>
    )
}

export default Ply;