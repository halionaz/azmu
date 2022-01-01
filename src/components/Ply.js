const Ply = ({music}) => {
    return (
        <div style={{"cursor" : "pointer"}}>
            <img src={music.imgsrc} alt={`${music.name} Album Cover`} width={"75px"} height={"75px"}></img>
            <div>{music.name}</div>
            <div>{music.artist}</div>
        </div>
    )
}

export default Ply;