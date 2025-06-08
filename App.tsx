import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './src/navigation/bottom-tab';
import AuthScreen from './src/screens/Auth/auth';
import {AuthProvider, useAuthContext} from './lib/auth-context';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  BottomTab: undefined;
  DetailUser: {userId: number};
  Login: undefined;
  AuthScreen: undefined;
};

function RootStack() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {user} = useAuthContext();
  const isAuth = true; // !!user

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAuth ? (
        <Stack.Screen name="BottomTab" component={BottomTab} />
      ) : (
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootStack />
      </AuthProvider>
    </NavigationContainer>
  );
}
