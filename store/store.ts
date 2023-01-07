import { User } from 'next-auth';
import create from 'zustand'


interface UserState {
    email: String | null;
    isLoggedIn: boolean;
    setUserEmail: (email: String) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

// create store
const useStore = create<UserState>()((set, get) => ({
    email: null,
    isLoggedIn: false,
    setUserEmail: (email: String) => set((state: UserState) => ({email: email})),
    setIsLoggedIn: (newState: boolean) => set((state: UserState) => ({isLoggedIn: newState})),
}))
export default useStore