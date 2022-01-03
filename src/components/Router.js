import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Signup from "routes/Signup";
import Header from "./Header";
import Profile from "routes/Profile";
import Player from "./Player";

const AppRouter = ({usr, isPlay, curPlay, playOrStop, setCurPlay}) => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Header usr={usr}></Header>
            <Routes>
                <Route path="/" element={<Home usr={usr} isPlay={isPlay} curPlay={curPlay} setCurPlay={setCurPlay} />}></Route>
                {usr ===null ? (<Route path="/signin" element={<Auth />}></Route>) : (<Route path="/signin" element={<Navigate replace to="/"></Navigate>}></Route>)}
                {usr ===null ? (<Route path="/signup" element={<Signup />}></Route>) : (<Route path="/signup" element={<Navigate replace to="/"></Navigate>}></Route>)}
                {usr ? (<Route path="/profile" element={<Profile usr={usr} />}></Route>) : (<Route path="/profile" element={<Navigate replace to="/"></Navigate>}></Route>)}
            </Routes>
            {usr && <Player isPlay={isPlay} curPlay={curPlay} setCurPlay={setCurPlay} playOrStop={playOrStop}></Player>}
        </Router>
    )
};

export default AppRouter;