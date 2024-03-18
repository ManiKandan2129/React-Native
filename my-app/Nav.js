import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import VideoScreen from './Screens/VideoScreen';
import { useIsFocused } from '@react-navigation/native';
import Channels from './Screens/Channels';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Login from './Screens/auth/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from './ContextApi/Context';
import Sports from './Screens/Sports';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Homepage" component={HomeScreen} />
    <Stack.Screen name="Video" component={VideoScreen} />
  </Stack.Navigator>
);

const ChannelStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Channelspage" component={Channels} />
  </Stack.Navigator>
);


const AppTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false, 
    tabBarLabelStyle: { fontSize: 16, fontWeight:600 }, 
    tabBarInactiveTintColor: '#ffba00',   
    tabBarActiveTintColor: '#121212',
    tabBarStyle: { backgroundColor: '#121212', borderTopWidth: 0, }, 
    tabBarActiveBackgroundColor: '#ffba00', }}>

        <Tab.Screen
         options={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
            const isFocused = useIsFocused();
            const iconName = 'home'; 
            return (
                <Icon
                name={iconName}
                color={isFocused ? '#121212' : '#ffba00'}
                size={25}/>);},
            })}
            name="Home"
            component={HomeStack}
        />

        <Tab.Screen
         options={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
            const isFocused = useIsFocused();
            const iconName = 'cast'; 
            return (
                <Icon
                name={iconName}
                color={isFocused ? '#121212' : '#ffba00'}
                size={25}/>);},
            })}
            name="Channels"
            component={ChannelStack}
        />

        <Tab.Screen
         options={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
            const isFocused = useIsFocused();
            const iconName = 'cricket'; 
            return (
                <Icon
                name={iconName}
                color={isFocused ? '#121212' : '#ffba00'}
                size={25}/>);},
            })}
            name="Sports"
            component={Sports}
        />

  </Tab.Navigator>
);



const NavApp =() => {

  const[isLoggedIn, setisLoggedIn] = useState(null);

  const checkLoginStatus =  async() => {
    try {
      const LoginStatus = await AsyncStorage.getItem("login");
      setisLoggedIn(LoginStatus === "Login Successfull")
      console.log(LoginStatus);
    } 
    catch (error) {
      console.error('Error checking login status:', error);
    }
  }
  useEffect(()=>{
      checkLoginStatus();
  },[]);
 
  return (
    <NavigationContainer>
      {isLoggedIn ? ( <AppTabs />) : 
      (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Homepage" component={AppTabs} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
    
  );

};

export default NavApp;
