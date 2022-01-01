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

    const onSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, usrID, usrPD)
            .then((usrCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: usrName,
                });
            })
            .catch((err) => {
                console.log(err.message);
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
            {/* <div>다음 회원가입 방법 중 하나를 선택하세요</div>
            <button>이메일 아이디로 가입하기</button> */}
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
        </>
    );
};

export default Signup;
