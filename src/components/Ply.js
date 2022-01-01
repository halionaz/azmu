// import { useEffect } from "react";

const Ply = ({music, curPlay, setCurPlay, isPlay}) => {
    const start = () => {
        if(!curPlay || curPlay.name !== music.name){
            console.log(`Play : ${music.name}`);
            setCurPlay(music);
        }
    }
    return (
        <div onClick={start} style={{"cursor" : "pointer"}}>
            <img src={music.imgsrc} alt={`${music.name} Album Cover`} width={"75px"} height={"75px"}></img>
            <div>{music.name}</div>
            <div>{music.artist}</div>
        </div>
    )
}

export default Ply;