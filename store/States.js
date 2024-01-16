import { create } from "zustand";

export const useStore = create((set) => ({
  profileName: "",
  profilePicture:
    "https://firebasestorage.googleapis.com/v0/b/wonen-app.appspot.com/o/profilePics%2Fstandaard.png?alt=media&token=9af39108-4ddf-4478-af70-9864d446a215",
  updateProfileName: (newProfileName) =>
    set(() => ({ profileName: newProfileName })),
  updateProfilePicture: (newProfilePicture) =>
    set(() => ({ profilePicture: newProfilePicture })),
}));
