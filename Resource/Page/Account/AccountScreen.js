import {Avatar} from '@rneui/base';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../utils/Colors';
import {styles} from './AccountStyle';

function AccountScreen(props) {
  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <Text style={[styles.headingText]}>Account</Text>
      </View>
      <View style={styles.MainView}>
        <TouchableOpacity style={styles.btnview}>
          <Avatar
            icon={{
              name: 'user',
              type: 'antdesign',
              color: Colors.DarkColor,
              size: 20,
            }}
          />
          <Text style={[styles.label]}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('TopTabNavigation')}
          style={styles.btnview}>
          <Avatar
            icon={{
              name: 'book',
              type: 'entypo',
              color: Colors.DarkColor,
              size: 20,
            }}
          />
          <Text style={[styles.label]}>My Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ContactUsScreen')}
          style={styles.btnview}>
          <Avatar
            icon={{
              name: 'contacts',
              type: 'antdesign',
              color: Colors.DarkColor,
              size: 20,
            }}
          />
          <Text style={[styles.label]}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AboutUsScreen')}
          style={styles.btnview}>
          <Avatar
            icon={{
              name: 'details',
              type: 'MaterialIcons',
              color: Colors.DarkColor,
              size: 20,
            }}
          />
          <Text style={[styles.label]}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('TermAndConditionScreen')}
          style={styles.btnview}>
          <Avatar
            icon={{
              name: 'clipboard-notes',
              type: 'foundation',
              color: Colors.DarkColor,
              size: 20,
            }}
          />
          <Text style={[styles.label]}>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('CancellAndRefundScreen')}
          style={styles.btnview}>
          <Avatar
            icon={{
              name: 'credit-card',
              type: 'entypo',
              color: Colors.DarkColor,
              size: 20,
            }}
          />
          <Text style={[styles.label]}>Cancellation/Refund Policies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('PrivacyPolicyScreen')}
          style={styles.btnview}>
          <Avatar
            icon={{
              name: 'privacy-tip',
              type: 'MaterialIcons',
              color: Colors.DarkColor,
              size: 20,
            }}
          />
          <Text style={[styles.label]}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.replace('LoginWithMobileScreen')}
          style={styles.btnview}>
          <Avatar
            icon={{
              name: 'logout',
              type: 'antdesign',
              color: Colors.DarkColor,
              size: 20,
            }}
          />
          <Text style={[styles.label]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default AccountScreen;
