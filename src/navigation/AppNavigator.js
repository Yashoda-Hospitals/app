import React, { useContext } from 'react';
import firebase from 'firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme, themeColor } from 'react-native-rapi-ui';
import TabBarIcon from '../components/utils/TabBarIcon';
import TabBarText from '../components/utils/TabBarText';
//Screens
import Home from '../screens/Home';
import SecondScreen from '../screens/SecondScreen';
import Locate from '../screens/Locate';
import Profile from '../screens/Profile';
import Covid from '../screens/Covid';
import Book from '../screens/Book';
import Loading from '../screens/utils/Loading';
// Auth screens
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ForgetPassword from '../screens/auth/ForgetPassword';
import { AuthContext } from '../provider/AuthProvider';

// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: 'AIzaSyBLDDlfMHD9MSYAAJoV3Fj2BKemUPksPfM',
  authDomain: 'yashodha-1e95e.firebaseapp.com',
  projectId: 'yashodha-1e95e',
  storageBucket: 'yashodha-1e95e.appspot.com',
  messagingSenderId: '368876551725',
  appId: '1:368876551725:web:555ea8e2f0384c150702a4',
  measurementId: 'G-J65JFTLQFH',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const AuthStack = createStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name='Login' component={Login} />
      <AuthStack.Screen name='Register' component={Register} />
      <AuthStack.Screen name='ForgetPassword' component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name='MainTabs' component={MainTabs} />
      <MainStack.Screen name='SecondScreen' component={SecondScreen} />
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      tabBarOptions={{
        style: {
          borderTopWidth: 0,
          borderTopColor: isDarkmode ? themeColor.dark100 : '#c0c0c0',
          backgroundColor: isDarkmode ? themeColor.dark200 : '#ffffff',
          keyboardHidesTabBar: true,
        },
      }}>
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name='Home'
        component={Home}
        options={{
          // title: 'My home',
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title='Home' />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={'home'} />
          ),
        }}
      />
      <Tabs.Screen
        name='Covid'
        component={Covid}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title='Covid' />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={'flower'} />
          ),
        }}
      />
      <Tabs.Screen
        name='Book'
        component={Book}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title='Book' />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={'bandage'} />
          ),
        }}
      />
      <Tabs.Screen
        name='Locate'
        component={Locate}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title='Locate' />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={'map'} />
          ),
        }}
      />
      <Tabs.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title='Profile' />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={'person'} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer>
      {user == null && <Loading />}
      {user == false && <Auth />}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
