import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpCommingAppointmentScreen from '../../Page/My_Appointments/UpCommingAppointmentsScree';
import PastAppointmentScreen from '../../Page/My_Appointments/PastAppointmentScreen';
import {Colors} from '../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FontSize} from '../../utils/FontSize';
import {BackHandler} from 'react-native';
function TopTabNavigation(props) {
  const Tab = createMaterialTopTabNavigator();
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  });
  const backAction = () => {
    props.navigation.goBack('');
    return true;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.appdefultcolor,
          borderBottomColor: Colors.appdefultcolor,
        },
        tabBarInactiveTintColor: Colors.White,
        tabBarActiveTintColor: Colors.Black,
        // tabBarIndicator: color => {},
        tabBarPressColor: Colors.DarkColor,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.DarkColor,
        },
      }}>
      <Tab.Screen
        name="Upcomming"
        component={UpCommingAppointmentScreen}
        options={{
          tabBarLabel: 'Upcoming',
          tabBarLabelStyle: {},
        }}
      />
      <Tab.Screen name="Past" component={PastAppointmentScreen} />
    </Tab.Navigator>
  );
}

export default TopTabNavigation;
