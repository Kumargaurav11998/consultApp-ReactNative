import {Avatar} from '@rneui/base';
import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from './LoginStyle';
import {TextInput} from 'react-native-paper';
import {Colors} from '../../utils/Colors';
import TouchComponent from '../../Component/TouchComponent';
import {borderRadius} from '../../utils/size';
import {FontSize} from '../../utils/FontSize';
import {useToast, NativeBaseProvider, Center} from 'native-base';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {AuthActtion} from '../../Action/AuthAction';
import {CommonAction} from '../../Action/CommonAction';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import Spinner from 'react-native-loading-spinner-overlay';
import {UserDetailsAction} from '../../Action/UserDetailsAction';
function LoginWithMobileScreen(props) {
  const [text, setText] = useState('');
  const [iserror, seterror] = useState(false);
  const [isloader, setloader] = useState(false);
  const toast = useToast();
  const reg = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  const dispatch = useDispatch();
  const ischange = v => {
    seterror(false);
    setText(v);
    if (reg.test(v) === false) {
      seterror(true);
    }
  };

  const isLogin = () => {
    if (!text) {
      seterror(true);
      toast.show({
        title: 'Please, Enter Mobile Number',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else if (reg.test(text) === false) {
      toast.show({
        title: 'Please, Enter Correct Mobile Number',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else {
      setloader(true);
      const date = moment().format('YYYY-MM-DD  hh:mm:ss').toString();

      dispatch(AuthActtion.LoginAction(text, date)).then(async data => {
        if (data) {
          const useid = {
            userid: data[0].id,
            userContact: data[0].contact,
            username: data[0].name,
          };

          dispatch(CommonAction.GetUserId(useid));
          dispatch(UserDetailsAction.GetStudentInfoAction(data[0].id));

          dispatch(AuthActtion.GetOTPAction(text)).then(async data => {
            if (data) {
              setloader(false);
              props.navigation.push('OTPScreen');
            }
          });
        }
      });
      setTimeout(() => {
        setloader(false);
      }, 50000);
    }
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <Avatar
          size={100}
          source={require('../../Assets/Photos/logo.png')}
          containerStyle={[styles.AvatarContainer]}
          avatarStyle={{resizeMode: 'contain'}}
        />
      </View>
      <Text style={[styles.headingText]}>Login</Text>
      <View style={styles.MainView}>
        <View style={[styles.textinputeview]}>
          <TextInput
            placeholder="Enter your mobile"
            label="Mobile"
            value={text}
            mode="outlined"
            onChangeText={ischange}
            keyboardType="phone-pad"
            activeOutlineColor={Colors.Black}
            outlineColor={Colors.DarkColor}
            error={iserror}
            style={styles.textinputestyle}
            dense={true}
          />
        </View>
        <View style={[styles.btn]}>
          <TouchComponent
            press={() => isLogin()}
            title="Next"
            titlecolor={Colors.White}
            backgroundColor={Colors.DarkColor}
            borderRadius={borderRadius.BtnBr}
            paddingVertical={'8%'}
            fontSize={FontSize.btn}
          />
        </View>
      </View>

      {isloader && (
        <Spinner
          visible={true}
          textContent={'please wait...'}
          textStyle={styles.loadertxt}
          customIndicator={
            <UIActivityIndicator
              style={styles.loaderstyle}
              color={Colors.White}
            />
          }
        />
      )}
    </SafeAreaView>
  );
}
export default LoginWithMobileScreen;
