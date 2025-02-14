import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../services/firebase/firebase.init";
export const userContext = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

const provider = new GoogleAuthProvider();

  const SignUpWithEmail = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInWithEmailPass = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOut = () => {
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const handleGoogleLogin = () =>{
    setLoader(true);
    return signInWithPopup(auth, provider)
  }

  useEffect(() => {
    const unSubcribe = () => {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          setLoader(false);
        } else {
          setUser(null);
          setLoader(false);
        }
      });
    };

    return () => {
      unSubcribe();
    };
  });
  const userInfo = {
    SignUpWithEmail,
    SignInWithEmailPass,
    user,
    loader,
    SignOut,
    updateUserProfile,
    handleGoogleLogin,
  };
  return (
    <userContext.Provider value={userInfo}>{children}</userContext.Provider>
  );
};

export default AuthContext;
