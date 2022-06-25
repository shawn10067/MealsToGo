import { getApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export const loginRequest = async (email, password) => {
  const app = getApp();
  const auth = getAuth(app);
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error(error);
  }
};
