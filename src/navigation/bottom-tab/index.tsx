import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/home';
import Profile from '../../screens/Profile/profile';
import Login from '../../screens/Login/login';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function HomeTabBarIcon({color, size}: {color: string; size: number}) {
  return <Icon name="home" size={size} color={color} />;
}

function BottomTab() {
  return (
    <Tab.Navigator
    // screenOptions={{tabBarActiveTintColor: 'coral'}}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: HomeTabBarIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
