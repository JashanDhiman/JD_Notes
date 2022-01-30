import React from "react";
import firebase from "firebase/compat/app";
import { auth, database } from "../misc/firebase";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

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

      toast.success(`Welcome ${user.displayName}, You Successfully Signed In`);
    } catch (err) {
      toast.error(err.message, 4000);
    }
  };

  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <div className="signin_div">
      <div className="signinBtn" onClick={onGoogleSignIn}>
        <div className="svg">
          <FcGoogle />
        </div>
        <button>Continue with Google</button>
      </div>
    </div>
  );
};

export default SignIn;
