import { useState } from "react";
import "./App.css";
import PrivateRoute from "./routes/PrivateRoute";
import { auth, logout } from "./lib/firebase-auth";
import { onAuthStateChanged } from "./lib/firebase-imports";
import PublicRoute from "./routes/PublicRoute";


function App() {
  const [isAuth, setAuth] = useState(null);
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuth(user);
      console.log(user);
    } else {
      setAuth(null);
      console.log(null);
    }
  });

  const user = auth.currentUser;

  return isAuth ? <PrivateRoute user={user} logoutBtn={logout}/> : <PublicRoute />;
}

export default App;
