import { createContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_BASEURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

const auth = firebase.auth();

export const AuthContext = createContext();

const useAuth = (auth) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    const unsubscribe = auth.onAuthStateChanged((userData) =>
      setUser(userData)
    );
   
    return () => unsubscribe();
     //Below Line remove the useEffect dependency warning
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, isUserLoggedIn: user ? true : false, loading };
};

export const AuthProvider = ({ children }) => {
  const { user, loading, isUserLoggedIn } = useAuth(auth);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isUserLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};