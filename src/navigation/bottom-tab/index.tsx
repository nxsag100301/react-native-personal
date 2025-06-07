import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/home';
import Profile from '../../screens/Profile/profile';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
