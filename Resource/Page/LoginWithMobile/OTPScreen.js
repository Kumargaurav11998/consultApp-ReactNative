import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from './OTPStyle';
import {Avatar} from '@rneui/base';
import {Colors} from '../../utils/Colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import TouchComponent from '../../Component/TouchComponent';
import {borderRadius} from '../../utils/size';
import {FontSize} from '../../utils/FontSize';
import {useToast} from 'native-base';
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
import {useDispatch, useSelector} from 'react-redux';
import {AuthActtion} from '../../Action/AuthAction';
function OTPScreen(props) {
  const [isOTP, setOtp] = useState('');
  const [istext, settext] = useState('');
  const [isloader, setloader] = useState(false);
  const userMobile = useSelector(id => id.GetUerId.Getuserid.userContact);
  const toast = useToast();
  const dispatch = useDispatch();
  const isVeryfy = () => {
    if (!isOTP) {
      toast.show({
        title: 'Please, Enter OTP',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    }
    {
      setloader(true);
      dispatch(AuthActtion.verifyOTPAction(isOTP)).then(async data => {
        console.log(data, '//////////');
        if (data) {
          if (data.message == 'Login Successful') {
            setloader(false);
            props.navigation.replace('TabNavigation');
          } else {
            setloader(false);
            toast.show({
              title: 'Opps, Invalid  OTP 😥',
              placement: 'bottom',
              backgroundColor: Colors.DarkColor,
            });
          }
        } else {
          setloader(false);
          toast.show({
            title: 'Opps, Something Went Wrong 😥',
            placement: 'bottom',
            backgroundColor: Colors.DarkColor,
          });
        }
      });
      //
    }
  };
  const isautoverify = code => {
    setloader(true);
    dispatch(AuthActtion.verifyOTPAction(code)).then(async data => {
      console.log(data, '//////////');
      if (data) {
        setloader(false);
        if (data.message == 'Login Successful') {
          props.navigation.replace('TabNavigation');
        } else {
          setloader(false);
          toast.show({
            title: 'Opps, Invalid  OTP 😥',
            placement: 'bottom',
            backgroundColor: Colors.DarkColor,
          });
        }
      } else {
        setloader(false);
        toast.show({
          title: 'Opps, Something Went Wrong 😥',
          placement: 'bottom',
          backgroundColor: Colors.DarkColor,
        });
      }
    });
  };
  const isresend = () => {
    dispatch(AuthActtion.GetOTPAction(userMobile)).then(async data => {
      if (data) {
        toast.show({
          title: 'OTP Sent',
          placement: 'bottom',
          backgroundColor: Colors.DarkColor,
        });
      }
    });
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <Avatar
        onPress={() => props.navigation.goBack('')}
        size={50}
        icon={{name: 'arrowleft', type: 'antdesign', color: Colors.DarkColor}}
        containerStyle={[styles.backicon]}
      />

      <Avatar
        size={100}
        source={require('../../Assets/Photos/logo.png')}
        containerStyle={[styles.AvatarContainer]}
        avatarStyle={{resizeMode: 'contain'}}
      />

      <View style={[styles.MainView]}>
        <Text style={[styles.lable]}>OTP</Text>
        <View>
          <OTPInputView
            style={styles.otpinputstyle}
            pinCount={6}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={code => settext(code)}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.inpustyle}
            codeInputHighlightStyle={[styles.borderStyleHighLighted]}
            onCodeFilled={code => {
              setOtp(code);
              isautoverify(code);
            }}
            keyboardType="number-pad"
            editable={true}
          />
        </View>

        <View style={[styles.btn]}>
          <TouchComponent
            press={() => isVeryfy()}
            title="Verify"
            titlecolor={Colors.White}
            backgroundColor={Colors.DarkColor}
            borderRadius={borderRadius.BtnBr}
            paddingVertical={'8%'}
            fontSize={FontSize.btn}
          />
        </View>
        <Text onPress={() => isresend()} style={[styles.headingText]}>
          Resend
        </Text>
      </View>
      {isloader && (
        <Spinner
          visible={true}
          textContent={'Verifying...'}
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

export default OTPScreen;
