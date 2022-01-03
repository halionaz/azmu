import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "routes/Auth.module.css"

const Auth = () => {
    const [usrID, setUsrID] = useState("");
    const [usrPD, setUsrPD] = useState("");
    const [signinning, setSigninning] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const onChange = (event) => {
        if (event.target.name === "id") {
            setUsrID(event.target.value);
        } else if (event.target.name === "pd") {
            setUsrPD(event.target.value);
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
        setSigninning(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, usrID, usrPD).then((credit) => {
            console.log("로그인 성공");
        }).catch( (err) => {
            setErrorMessage(<div>{err.message}</div>);
            setSigninning(false);
        })
        setUsrID(""); setUsrPD("");
    };
    return (
        <div className={style.sign}>
            {signinning ? (<div>로그인 중...</div>) :(
                <>
                    <form className={style.form} onSubmit={onSubmit} >
                        <input
                            name="id"
                            type={"text"}
                            placeholder="아이디(이메일)"
                            value={usrID}
                            onChange={onChange}
                            className={style.inner_form}
                            ></input>
                        <input
                            name="pd"
                            type={"password"}
                            placeholder="비밀번호"
                            value={usrPD}
                            onChange={onChange}
                            className={style.inner_form}
                        ></input>
                        <input className={style.submit} type={"submit"} value={"로그인"}></input>
                    </form>
                    <div className={style.err}>
                        {errorMessage}
                        <Link className={style.signup} to="/signup">회원가입</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Auth;
