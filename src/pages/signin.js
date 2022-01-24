import React from "react";
import firebase from "firebase/compat/app";
import { auth, database } from "../misc/firebase";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const signInWithProvider = async (provider) => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      alert("Signed in", 4000);
    } catch (err) {
      alert(err.message, 4000);
    }
  };

  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <div>
      <FcGoogle />
      <button onClick={onGoogleSignIn}>Continue with Google</button>
    </div>
  );
};

export default SignIn;
