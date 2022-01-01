import AppRouter from "components/Router";
import {
    getAuth,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(undefined);
    const [isPlay, setIsPlay] = useState(true);
    const [curPlay, setCurPlay] = useState(null);

    const playOrStop = () => {
        setIsPlay(cur => !cur);
    }

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (usr) => {
            if (usr) {
                setUser({
                    displayName: usr.displayName,
                    uid: usr.uid,
                });
            } else {
                setUser(null);
            }
        });
        setLoading(false);
    }, []);

    return loading ? (
        <div>loading</div>
    ) : (
        <>
            <AppRouter usr={user} isPlay={isPlay} curPlay={curPlay} setCurPlay={setCurPlay} playOrStop={playOrStop}></AppRouter>
        </>
    );
}

export default App;
