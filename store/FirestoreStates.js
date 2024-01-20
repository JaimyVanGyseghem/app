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
  setData: async (collectionName, collectionData) => {
    try {
      const userId = useFirebaseStates.getState().userId;

      // Access Firestore and add a document to the 'recipes' subcollection
      const addCollection = collection(
        fireStore,
        "users",
        userId,
        collectionName
      );
      const newCollectionRef = await addDoc(addCollection, collectionData);

      console.log("Collection item added with ID: ", newCollectionRef.id);
    } catch (error) {
      console.error("Error adding recipe document: ", error);
    }
  },
}));
// useFirebaseStates.getState().userId
