import { createContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged, User } from "firebase/auth";
import { AuthProviderProps } from "../types/types";

export const AuthContext = createContext<User | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
      //console.log("user: ", user);
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
