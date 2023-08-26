import React from 'react';
import HomeScreen from '../../Page/Home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from '../../Page/Account/AccountScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../utils/Colors';
import FeedScreen from '../../Page/Feed/FeedScreen';
function TabNavigation() {
  const Tab = createBottomTabNavigator();
  var a = 5;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.DarkColor,
        },
        tabBarInactiveTintColor: Colors.White,
        tabBarActiveTintColor: Colors.appdefultcolor,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="feed" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
