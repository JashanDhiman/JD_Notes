import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, database } from "../misc/firebase";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    let userRef;
    const authUnsub = auth.onAuthStateChanged((authObj) => {
      if (authObj) {
        userRef = database.ref(`/profiles/${authObj.uid}`);
        userRef.on("value", (snap) => {
          const { createdAt, name } = snap.val();
          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          };
          console.log(data);
          setProfile(data);
        });
      } else {
        if (userRef) {
          userRef.off();
        }
        setProfile(null);
      }
    });
    return () => {
      authUnsub();
      if (userRef) {
        userRef.off();
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
