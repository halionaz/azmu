import {
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
} from "firebase/auth";
import { useState } from "react";

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
        <>
            {signinning ? (
                <div>가입 중...</div>
            ) : (
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
                        name="nickname"
                        type={"text"}
                        placeholder="닉네임"
                        value={usrName}
                        onChange={onChange}
                    ></input>
                    <input
                        name="pd"
                        type={"password"}
                        placeholder="비밀번호"
                        value={usrPD}
                        onChange={onChange}
                    ></input>
                    <input type={"submit"} value={"회원가입"}></input>
                </form>
                {errorMessage}
                </>
            )}
        </>
    );
};

export default Signup;
