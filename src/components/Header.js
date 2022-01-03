import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import style from "components/Header.module.css";

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
        <header className={style.header}>
            <Link to="/" className={style.azmu}><h1><span className={style.highlight}>az</span>mu;</h1></Link>
            <div className={style.navi}>
                {
                    usr === null && (
                        <>
                        <Link className={style.left} to="/signin">로그인</Link>
                        <Link to="/signup">회원가입</Link>
                        </>
                    ) 
                }
                {
                    usr && (
                        <>
                        <Link className={style.left} to="/profile">프로필</Link>
                        <div className={style.logout} onClick={logout}>로그아웃</div>
                        </>
                    )
                }
            </div>
        </header>
    )
}


export default Header;