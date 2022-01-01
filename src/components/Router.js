import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Signup from "routes/Signup";
import Header from "./Header";
import Profile from "routes/Profile";

const AppRouter = ({usr}) => {
    return (
        <Router>
            <Header usr={usr}></Header>
            <Routes>
                <Route path="/" element={<Home usr={usr}/>}></Route>
                {usr ===null ? (<Route path="/signin" element={<Auth />}></Route>) : (<Route path="/signin" element={<Navigate replace to="/"></Navigate>}></Route>)}
                {usr ===null ? (<Route path="/signup" element={<Signup />}></Route>) : (<Route path="/signup" element={<Navigate replace to="/"></Navigate>}></Route>)}
                {usr ? (<Route path="/profile" element={<Profile usr={usr} />}></Route>) : (<Route path="/profile" element={<Navigate replace to="/"></Navigate>}></Route>)}
            </Routes>
        </Router>
    )
};

export default AppRouter;