import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";

const Signin = () => {
    const [usrID, setUsrID] = useState("");
    const [usrPD, setUsrPD] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, usrID, usrPD)
            .then((usrCredential) => {
                console.log(usrCredential);
                console.log("성공적으로 계정 생성!");
            })
            .catch((err) => {
                console.log(err.message);
            });
        setUsrID(""); setUsrPD("");
    };
    const onChange = (event) => {
        if (event.target.name === "id") {
            setUsrID(event.target.value);
        } else if (event.target.name === "pd") {
            setUsrPD(event.target.value);
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

export default Signin;
