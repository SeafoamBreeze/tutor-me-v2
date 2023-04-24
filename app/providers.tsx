"use client";
import { AmplifyProvider } from '@aws-amplify/ui-react';
import "../src/amplifyConfigure"
import { Dispatch, SetStateAction, createContext, useState } from 'react';

export const AuthContext = createContext<{
  isAuthenticated: boolean,
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>,  
}>({
  isAuthenticated: false,
  setIsAuthenticated: () => { },
});

export default function Providers({ children }: { children: React.ReactNode }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <AmplifyProvider>
        {children}
      </AmplifyProvider>
    </AuthContext.Provider>
  )
}