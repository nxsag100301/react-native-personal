import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './src/navigation/bottom-tab';
import DetailUser from './src/screens/DetailUser/detail-user';
import Login from './src/screens/Login/login';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  BottomTab: undefined;
  DetailUser: {userId: number};
  Login: undefined;
};

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailUser"
        component={DetailUser}
        options={{title: 'Chi tiết người dùng'}}
      />
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
