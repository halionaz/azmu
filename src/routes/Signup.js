import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
} from "firebase/auth";
import { useState } from "react";
import style from "routes/Auth.module.css";

const Signup = () => {
    const [usrID, setUsrID] = useState("");
    const [usrName, setUsrName] = useState("");
    const [usrPD, setUsrPD] = useState("");
    const [signinning, setSigninning] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        setSigninning(true);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, usrID, usrPD)
            .then((usrCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: usrName,
                });
            })
            .catch((err) => {
                setSigninning(false);
                setErrorMessage(err.message);
            });
        setUsrID("");
        setUsrName("");
        setUsrPD("");
    };
    const onChange = (event) => {
        if (event.target.name === "id") {
            setUsrID(event.target.value);
        } else if (event.target.name === "pd") {
            setUsrPD(event.target.value);
        } else if (event.target.name === "nickname") {
            setUsrName(event.target.value);
        }
    };

    return (
        <div className={style.sign}>
            {signinning ? (
                <div>가입 중...</div>
            ) : (
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
                            name="nickname"
                            type={"text"}
                            placeholder="닉네임"
                            value={usrName}
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
                        <input className={style.submit} type={"submit"} value={"회원가입"}></input>
                    </form>
                    <div className={style.err}>
                        {errorMessage}
                    </div>
                </>
            )}
        </div>
    );
};

export default Signup;
