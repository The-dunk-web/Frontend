import { create } from 'zustand';
import Cookies from 'js-cookie';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: number;
    firstName: string;
    email: string;
    profile?: string;
  } | null;
  initializeAuth: () => void;
  login: (user: { id: number; firstName: string; email: string; profile?: string }) => void;
  logout: () => void;
  updateUser: (updatedUser: {
    firstName?: string;
    email?: string;
    profile?: string;
    lastName?: string;
  }) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  initializeAuth: () => {
    const isAuthenticated = Cookies.get('isAuthenticated') === 'true';
    const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')!) : null;

    set({ isAuthenticated, user });
  },
  login: (user) => {
    Cookies.set('isAuthenticated', 'true', { expires: 7 });
    Cookies.set('user', JSON.stringify(user), { expires: 7 });
    set({ isAuthenticated: true, user });
  },
  logout: () => {
    Cookies.remove('isAuthenticated');
    Cookies.remove('user');
    set({ isAuthenticated: false, user: null });
  },
  updateUser: (updatedUser) => {
    set((state) => {
      if (!state.user) return state; // If no user is logged in, do nothing

      // Merge the updated fields with the existing user data
      const newUser = { ...state.user, ...updatedUser };

      // Update the cookie
      Cookies.set('user', JSON.stringify(newUser), { expires: 7 });

      // Return the new state
      return { user: newUser };
    });
  },
}));

export default useAuthStore;
