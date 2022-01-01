import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Header = ({usr}) => {
    const logout = (e) => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("로그아웃 성공");
        }).catch(err => {
            console.error(err);
        })
    }
    return (
        <>
            <Link to="/"><h1>azmu</h1></Link>
            {
                usr === null && (
                    <>
                    <Link to="/signin">로그인</Link>
                    <Link to="/signup">회원가입</Link>
                    </>
                ) 
            }
            {
                usr && (
                    <>
                    <Link to="/profile">프로필</Link>
                    <button onClick={logout}>로그아웃</button>
                    </>
                )
            }
        </>
    )
}


export default Header;