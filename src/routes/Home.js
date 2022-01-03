import Ply from "components/Ply";
import { db } from "fbase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import style from "components/Ply.module.css";

const Home = ({usr, curPlay, setCurPlay, isPlay}) => {
    const [musics, setMusics] = useState([]);
    const [init, setInit] = useState(true);

    const getMusicData = async () => {
        const querySnapshot = await getDocs(collection(db, "musics"));
        querySnapshot.forEach((doc) => {
            setMusics((prev) => {
                return [...prev, doc.data()];
            })
        });
    };

    useEffect(() => {
        getMusicData();
        setInit(false);
    }, []);
    return (
        <>
            {init ? (
                <div>로딩중</div>
            ) : (
                <>
                    {usr === null && (
                        <div>대충 홍보 페이지</div>
                    ) }
                    {usr && (
                        <div className={style.playlist}>
                            {musics.map((music, i) => {
                                return <Ply key={i} music={music} curPlay={curPlay} setCurPlay={setCurPlay} isPlay={isPlay}></Ply>;
                            })}
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Home;
