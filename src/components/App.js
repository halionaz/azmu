import AppRouter from "components/Router";
import {
    getAuth,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(undefined);

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
            <AppRouter usr={user}></AppRouter>
        </>
    );
}

export default App;
