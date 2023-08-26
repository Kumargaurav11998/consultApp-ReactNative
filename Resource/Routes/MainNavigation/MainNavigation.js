import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../Page/Splash/SplashScreen';
import TabNavigation from '../TabNavigation/TabNavigation';
import LoginWithMobileScreen from '../../Page/LoginWithMobile/LoginScreen';
import OTPScreen from '../../Page/LoginWithMobile/OTPScreen';
import StudentInfoScreen from '../../Page/UserProfileDetails/StudentInfoscreen';
import StudentQualificationScreen from '../../Page/StudentQulification.js/StudentQualificationScreen';
import StudentWorkExperienceScreen from '../../Page/StudentWorkExperience/StudentWorkExperienceScreen';
import StudentMaritalStatusScreen from '../../Page/StudentMartalStatus/StudentMaritalStatusSreen';
import StudentIELTSScreen from '../../Page/StudentIELTS_PTE/Student_IELT_PTE_Screen';
import PreviousRefusalScreen from '../../Page/StudentPreviousRefusal/PreviousRefusalScreen';
import BookAppointmentScreen from '../../Page/BookAppointment/BookAppointmentScreen';
import TopTabNavigation from '../TopTabNavigation/TopTabnavigation';
import {Colors} from '../../utils/Colors';
import AboutUsScreen from '../../Page/AboutUs/AboutUsScreen';
import ContactUsScreen from '../../Page/ContactUs/ContactUsScreen';
import TermAndConditionScreen from '../../Page/TermAndCondition/TermAndConditionScreen';
import CancellAndRefundScreen from '../../Page/CancellAndRefundpolicy/CancellAndRefundScreen';
import PrivacyPolicyScreen from '../../Page/PrivacyPolicy/PrivacyPolicyScreen';

function MainNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginWithMobileScreen"
          component={LoginWithMobileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StudentInfoScreen"
          component={StudentInfoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StudentQualificationScreen"
          component={StudentQualificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StudentWorkExperienceScreen"
          component={StudentWorkExperienceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StudentMaritalStatusScreen"
          component={StudentMaritalStatusScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StudentIELTSScreen"
          component={StudentIELTSScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PreviousRefusalScreen"
          component={PreviousRefusalScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookAppointmentScreen"
          component={BookAppointmentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TopTabNavigation"
          component={TopTabNavigation}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'My Appointments',
            title: 'My Appointments',
            headerTitleStyle: {color: Colors.Black},
            headerStyle: {backgroundColor: Colors.appdefultcolor},
            headerBackground: () => {},
          }}
        />
        <Stack.Screen
          name="AboutUsScreen"
          component={AboutUsScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'About Us',
            title: 'About Us',
            headerTitleStyle: {color: Colors.Black},
            headerStyle: {backgroundColor: Colors.appdefultcolor},
            headerBackground: () => {},
          }}
        />
        <Stack.Screen
          name="ContactUsScreen"
          component={ContactUsScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'About Us',
            title: 'Contact Us',
            headerTitleStyle: {color: Colors.Black},
            headerStyle: {backgroundColor: Colors.appdefultcolor},
            headerBackground: () => {},
          }}
        />
        <Stack.Screen
          name="TermAndConditionScreen"
          component={TermAndConditionScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'About Us',
            title: 'Term And Condition',
            headerTitleStyle: {color: Colors.Black},
            headerStyle: {backgroundColor: Colors.appdefultcolor},
            headerBackground: () => {},
          }}
        />
        <Stack.Screen
          name="CancellAndRefundScreen"
          component={CancellAndRefundScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'About Us',
            title: 'Cancell & Refund Policies',
            headerTitleStyle: {color: Colors.Black},
            headerStyle: {backgroundColor: Colors.appdefultcolor},
            headerBackground: () => {},
          }}
        />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
          options={{
            headerTitleAlign: 'center',

            title: 'Privacy Policy',
            headerTitleStyle: {color: Colors.Black},
            headerStyle: {backgroundColor: Colors.appdefultcolor},
            headerBackground: () => {},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
