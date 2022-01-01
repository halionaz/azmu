import Ply from "components/Ply";
import { db } from "fbase";
import { useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore";

const Home = ({usr}) => {
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
                        <>
                        <h2>재생목록</h2>
                        <button>검색</button>
                        {musics.map((music, i) => {
                            return <Ply key={i} music={music}></Ply>;
                        })}
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Home;
