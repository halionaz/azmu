import { Link } from "react-router-dom";

const Header = ({usr}) => {
    console.log(usr);
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
        </>
    )
}


export default Header;