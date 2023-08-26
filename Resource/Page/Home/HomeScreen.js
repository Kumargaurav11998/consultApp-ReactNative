import {Avatar} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, BackHandler} from 'react-native';
import TouchComponent from '../../Component/TouchComponent';
import TouchwithiconComponent from '../../Component/TouchWithIconComponent';
import {Colors} from '../../utils/Colors';
import {FontSize} from '../../utils/FontSize';
import {borderRadius} from '../../utils/size';
import {styles} from './HomeStyle';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActtion} from '../../Action/AuthAction';
function HomeScreen(props) {
  const userId = useSelector(id => id.GetUerId.Getuserid.userid);
  const userMobile = useSelector(id => id.GetUerId.Getuserid.userContact);
  const username = useSelector(id => id.GetUerId.Getuserid.username);
  const auth = useSelector(state => state.AuthReducer.authuser[0]);
  const userinfo = useSelector(
    state => state.GetStudentInfoReducer.getStudentinfo[0],
  );
  const [ischeck, setcheck] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AuthActtion.CheckAccountAction(userMobile)).then(async data => {
      if (data) {
        setcheck(data);
      }
    });
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  });
  const ismove = route => {
    if (ischeck.length == 0) {
      console.log('----');
      props.navigation.navigate('StudentInfoScreen');
    } else {
      // if (!userinfo.name) {
      //   console.log('-**---');
      //   props.navigation.navigate('StudentInfoScreen');
      // } else if (!userinfo.email) {
      //   props.navigation.navigate('StudentInfoScreen');
      // } else {
      //   props.navigation.navigate('BookAppointmentScreen');
      // }
      props.navigation.navigate('BookAppointmentScreen');
    }
  };
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingview}>
        <Text style={[styles.headingText]}>
          Welcome , {userinfo.name == null ? 'Guest' : userinfo.name}
        </Text>
        {/* <Text style={[styles.headingText]}>Guest</Text> */}
      </View>
      <Avatar
        size={100}
        source={require('../../Assets/Photos/logo.png')}
        containerStyle={[styles.AvatarContainer]}
        avatarStyle={{resizeMode: 'contain'}}
      />
      <View style={[styles.MainView]}>
        <View style={styles.btn}>
          <TouchwithiconComponent
            iconsize={20}
            title="My profile"
            titlecolor={Colors.appdefultcolor}
            backgroundColor={Colors.DarkColor}
            borderRadius={borderRadius.BtnBr}
            paddingVertical={'5%'}
            fontSize={FontSize.btn}
            press={() => props.navigation.navigate('StudentInfoScreen')}
            textmargintop={'2.5%'}
            txtmarginLeft={'5%'}
            //  borderWidth={}
            borderColor={Colors.DarkColor}
            iconML={'5%'}
            iconcolor={Colors.appdefultcolor}
            rounded={true}
            iconborderWidth={2}
            size={40}
            iconborc={Colors.appdefultcolor}
          />
        </View>
        <View style={[styles.btn, {marginTop: '10%'}]}>
          <TouchwithiconComponent
            title="Book Appointment"
            titlecolor={Colors.appdefultcolor}
            backgroundColor={Colors.DarkColor}
            borderRadius={borderRadius.BtnBr}
            paddingVertical={'5%'}
            fontSize={FontSize.btn}
            iconML={'5%'}
            iconcolor={Colors.appdefultcolor}
            textmargintop={'2.5%'}
            txtmarginLeft={'5%'}
            rounded={true}
            iconborderWidth={2}
            size={40}
            iconborc={Colors.appdefultcolor}
            borderColor={Colors.DarkColor}
            iconname={'book'}
            icontype={'antdesign'}
            iconsize={20}
            press={() => ismove()}
          />
        </View>
        {/* <View style={[styles.btn, {marginTop: '10%'}]}>
          <TouchwithiconComponent
            title="Feeds"
            titlecolor={Colors.appdefultcolor}
            backgroundColor={Colors.DarkColor}
            borderRadius={borderRadius.BtnBr}
            paddingVertical={'5%'}
            fontSize={FontSize.btn}
            press={() => props.navigation.navigate('FeedScreen')}
            iconML={'5%'}
            iconcolor={Colors.appdefultcolor}
            textmargintop={'2.5%'}
            txtmarginLeft={'5%'}
            rounded={true}
            iconborderWidth={2}
            size={40}
            iconborc={Colors.appdefultcolor}
            borderColor={Colors.DarkColor}
            iconname={'feed'}
            icontype={'font-awesome'}
            iconsize={20}
          />
        </View>
        <View style={[styles.btn, {marginTop: '10%'}]}>
          <TouchwithiconComponent
            title="About Us"
            titlecolor={Colors.appdefultcolor}
            backgroundColor={Colors.DarkColor}
            borderRadius={borderRadius.BtnBr}
            paddingVertical={'5%'}
            fontSize={FontSize.btn}
            press={() => console.log('f')}
            iconML={'5%'}
            iconcolor={Colors.appdefultcolor}
            textmargintop={'2.5%'}
            txtmarginLeft={'5%'}
            rounded={true}
            iconborderWidth={2}
            size={40}
            iconborc={Colors.appdefultcolor}
            borderColor={Colors.DarkColor}
            iconname={'info-circle'}
            icontype={'font-awesome'}
            iconsize={20}
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
