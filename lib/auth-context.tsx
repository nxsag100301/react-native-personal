import {createContext, ReactNode, useContext, useState} from 'react';
import {ID, Models} from 'react-native-appwrite';
import {account} from './appwrite';

type AuthContextType = {
  user: Models.User<Models.Preferences> | null;
  signUp: (email: string, password: string) => Promise<string | null>;
  signIn: (email: string, password: string) => Promise<string | null>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children: ReactNode}) {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null,
  );

  const signIn = async (email: string, password: string) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const userRes = await account.get();
      setUser(userRes);
      return null;
    } catch (error) {
      if (error instanceof Error) {
        console.log('check error sign in: ', error.message);
        return error.message;
      }
      return 'An error occur during sign in';
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      await account.create(ID.unique(), email, password);
      await signIn(email, password);
      return null;
    } catch (error) {
      if (error instanceof Error) {
        console.log('check error sign up: ', error.message);
        return error.message;
      }
      return 'An error occur during sign up';
    }
  };
  return (
    <AuthContext.Provider value={{user, signUp, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be inside of the authProvider');
  }
  return context;
}
