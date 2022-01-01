import AppRouter from "components/Router";
import "fbase";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user){
        console.log(user);
      } else {
        console.log("NO");
      }
    })
    setLoading(false);
  },[])
  
  return (
    <>
      {loading ? 
      <div>loading</div>
      :
      <AppRouter></AppRouter>}
    </>
  );
}

export default App;
