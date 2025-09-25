import { create } from 'zustand';
import { persist } from "zustand/middleware";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pendingUsers: string[];
  acceptedUsers: string[];
  accessToken: string;
}

interface UserState {
  user: User | null;
  setUser: (userData: User) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (userData) => set({ user: userData }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage", 
    }
  )
);

export default useUserStore;