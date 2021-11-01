import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";
initializeAuth();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [isLoadding, setIsLoadding] = useState(true);

  // Login Function
  const googleSignIn = () => {
    setIsLoadding(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setIsLoadding(false));
  };

  // User State Change
  useEffect(() => {
    setIsLoadding(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoadding(false);
    });
    return unsubscribed;
  }, []);

  // Logout function
  const Logout = () => {
    setIsLoadding(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoadding(false));
  };
  return {
    user,
    Logout,
    isLoadding,
    googleSignIn,
  };
};
export default useFirebase;
