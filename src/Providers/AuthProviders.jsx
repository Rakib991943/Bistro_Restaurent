import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';


export const AuthContext = createContext();

export const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email }
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token);
            }
            else {
              localStorage.removeItem('access-token');
            }
          })
      }
      else {

      }
      setLoading(false)
    })
    return () => {
      return unsubsribe;
    }
  }, [])

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    updateUserProfile,
    googleLogin,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;