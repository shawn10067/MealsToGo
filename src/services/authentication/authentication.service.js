import { getApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

export const loginRequest = async (email, password) => {
  const app = getApp();
  const auth = getAuth(app);
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw new Error(error.toString());
  }
};

export const createRequest = async (email, password) => {
  const app = getApp();
  const auth = getAuth(app);
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw new Error(error.toString());
  }
};
