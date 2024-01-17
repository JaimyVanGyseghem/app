import { create } from "zustand";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { fireStore } from "../firebase.js";

export const useFirebaseStates = create((set) => ({
  userId: "",
  updateUserId: (id) => set(() => ({ userId: id })),
  setData: async (value) => {
    try {
      // Access Firestore and add a document to the 'Recepts' collection
      const documentRef = doc(
        fireStore,
        "Recepts",
        useFirebaseStates.getState().userId
      );
      await setDoc(documentRef, { value });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  },
}));
