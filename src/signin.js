import React from "react";
import firebase from "firebase/compat/app";
import { auth, database } from "./misc/firebase";
//import { Navigate } from "react-router";

function SignIn() {
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
      console.log(err.message);
    }
  };
  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <div>
      <div className="login__container">
        <button className="login__btn login__google" onClick={onGoogleSignIn}>
          Continue with Google
        </button>
        {/*<Navigate to="/home" />;*/}
      </div>
    </div>
  );
}

export default SignIn;
