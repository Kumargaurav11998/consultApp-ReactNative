import React, {useEffect, useState} from 'react';
import {Linking, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {styles} from './ContactUsStyle';
import {useDispatch} from 'react-redux';
import {CommonAction} from '../../Action/CommonAction';
function ContactUsScreen() {
  const dispatch = useDispatch();
  const [isdata, setData] = useState();
  useEffect(() => {
    GetContactUs();
  }, []);
  const GetContactUs = () => {
    dispatch(CommonAction.GetCommonTermAndConditiontAction('contact')).then(
      async data => {
        if (data) {
          console.log(data);
          setData(data[0]);
        }
      },
    );
  };

  const dialCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${1234567890}';
    } else {
      phoneNumber = 'telprompt:${1234567890}';
    }

    Linking.openURL(phoneNumber);
  };
  const isEmail = () => {
    Linking.openURL('mailto:support@example.com');
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <TouchableOpacity onPress={() => isEmail()} style={[styles.email]}>
        <Text style={[styles.emailtxt]}>support@example.com</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dialCall()} style={[styles.email]}>
        <Text style={[styles.emailtxt]}>+911234567890</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default ContactUsScreen;
