import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../public/firebase.init";
import axios from "axios";
// import app from "../../../public/firebase.init";

// // Context api create
export const AuthContext = createContext(null);

// const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google Provider
  const googleProvider = new GoogleAuthProvider();

  // Facebook Provider
  const facebookProvider = new FacebookAuthProvider();

  // Github Provider
  const githubProvider = new GithubAuthProvider();

  // login by google
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  // login by Facebook
  const facebookLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, facebookProvider);
  };
  // login by Github
  const githubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  };

  // Create User
  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update Profile
  // const updateProfile = (name, photo) => {
  //   return updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photo,
  //   });
  // };

  const updateUserProfile=(username,photourl)=>{
    console.log(username,photourl)
    return updateProfile(auth.currentUser, {
        displayName: username,
         photoURL: photourl
      })
}


// Save User in DB
  const saveUser = async user =>{

    const currentUser = {
      email: user?.email,
      role: 'guest',
      status: 'verified'
    }

    // const {data} = await axios.put(``, currentUser)
    // return data
  }

  // For LogIn
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  // For logout
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user from auth", currentUser);
      saveUser(currentUser)
      setUser(currentUser);
      setLoading(false)
      // console.log(currentUser)

      saveUser(currentUser)

    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    registerUser,
    signIn,
    logOut,
    googleLogin,
    facebookLogin,
    githubLogin,
    updateUserProfile,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
