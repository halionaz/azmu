import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Auth from "routes/Auth";
import Signin from "routes/Signin";
import Header from "./Header";

const AppRouter = ({usr}) => {
    return (
        <Router>
            <Header usr={usr}></Header>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signin" element={<Auth />}></Route>
                <Route path="/signup" element={<Signin />}></Route>
            </Routes>
        </Router>
    )
};

export default AppRouter;