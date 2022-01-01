import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const Auth = () => {
    const [usrID, setUsrID] = useState("");
    const [usrPD, setUsrPD] = useState("");
    const onChange = (event) => {
        if (event.target.name === "id") {
            setUsrID(event.target.value);
        } else if (event.target.name === "pd") {
            setUsrPD(event.target.value);
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, usrID, usrPD).then((credit) => {
            console.log("로그인 성공");
        }).catch( err => {
            console.error(err);
        })
        setUsrID(""); setUsrPD("");
    };
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    name="id"
                    type={"text"}
                    placeholder="아이디(이메일)"
                    value={usrID}
                    onChange={onChange}
                ></input>
                <input
                    name="pd"
                    type={"password"}
                    placeholder="비밀번호"
                    value={usrPD}
                    onChange={onChange}
                ></input>
                <input type={"submit"} value={"로그인"}></input>
            </form>
            <Link to="/signup">회원가입</Link>
        </>
    );
};

export default Auth;
