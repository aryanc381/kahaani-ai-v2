import { create } from 'zustand';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pendingUsers: string[];
  acceptedUsers: string[];
}

interface UserState {
  user: User | null;
  setUser: (userData: User) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;