import { create } from "zustand";

export const useStore = create((set) => ({
  profileName: "",
  updateProfileName: (newProfileName) =>
    set(() => ({ profileName: newProfileName })),

  profilePicture:
    "https://firebasestorage.googleapis.com/v0/b/wonen-app.appspot.com/o/profilePics%2Fstandaard.png?alt=media&token=9af39108-4ddf-4478-af70-9864d446a215",
  updateProfilePicture: (newProfilePicture) =>
    set(() => ({ profilePicture: newProfilePicture })),

  data: null,
  setData: async (value) => {
    try {
      // Access Firestore and add a document to the 'yourCollection' collection
      const firestore = getFirestore();
      const docRef = await addDoc(collection(firestore, "yourCollection"), {
        value,
      });

      // Set the state with the document reference
      set({ data: docRef });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  },
}));
