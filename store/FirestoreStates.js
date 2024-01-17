import { create } from "zustand";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const id = getAuth().currentUser.uid;

export const useFirebaseStates = create((set) => ({
  setData: async (value) => {
    try {
      // Access Firestore and add a document to the 'Recepts' collection
      const firestore = getFirestore();
      const documentRef = doc(firestore, "Recepts", id);
      await setDoc(documentRef, { value });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  },
}));
