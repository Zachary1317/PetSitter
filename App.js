import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

import Me from './MeScreen/Me';
import Home from './BasicScreens/Home';
import Message from './BasicScreens/Message';
import History from './BasicScreens/History';
import Login from './BasicScreens/Login';
import RegisterScreen from './BasicScreens/Register';



function Overview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Message" component={Message} />
      <BottomTabs.Screen name="Me" component={Me} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="ExpensesOverview" component={Overview} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

