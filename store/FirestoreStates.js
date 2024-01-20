import { create } from "zustand";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  query,
  getDocs,
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
  recipeData: "",
  getRecipeData: async (collectionName) => {
    try {
      const userId = useFirebaseStates.getState().userId;

      // Access Firestore and get documents from the specified subcollection
      const getCollection = collection(
        fireStore,
        "users",
        userId,
        collectionName
      );
      const querySnapshot = await getDocs(getCollection);

      // Extract data from the query snapshot
      const allData = querySnapshot.docs.map((doc) => doc.data());

      // Conditionally update recipeData state
      if (collectionName === "recipes") {
        set(() => ({ recipeData: allData }));
      }
      return allData;
    } catch (error) {
      console.error("Error getting recipe data: ", error);
      return null;
    }
  },
}));
// useFirebaseStates.getState().userId
