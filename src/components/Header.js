import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Link to="/"><h1>azmu</h1></Link>
            <Link to="/signin">로그인</Link>
            <Link to="/signup">회원가입</Link>
        </>
    )
}


export default Header;