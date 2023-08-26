import {Avatar} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from '../../utils/Colors';
import {styles} from './Student_IELTS_PTE_Style';
import TouchComponent from '../../Component/TouchComponent';
import {borderRadius} from '../../utils/size';
import {FontSize} from '../../utils/FontSize';
import {useToast} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {UserDetailsAction} from '../../Action/UserDetailsAction';
import moment from 'moment';
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
import {set} from 'immer/dist/internal';
function StudentIELTSScreen(props) {
  const dispatch = useDispatch();
  const userId = useSelector(id => id.GetUerId.Getuserid.userid);
  const username = useSelector(id => id.GetUerId.Getuserid.username);
  const toast = useToast();
  const [isloader, setloader] = useState(false);
  const [OverallScrole, setOverall] = useState('');
  const [isoverallerr, setOverallScrerr] = useState(false);
  const [isListing, setisListing] = useState('');
  const [isListingerr, setisListingerr] = useState(false);
  const [isreading, setisreading] = useState('');
  const [isreadingerr, setisreadingerr] = useState(false);
  const [iswriting, setiswriting] = useState('');
  const [iswritingerr, setiswritingerr] = useState(false);
  const [isSpeaking, setisSpeaking] = useState('');
  const [isSpeakingerr, setisSpeakingerr] = useState(false);

  useEffect(() => {
    if (username) {
      GetIELTS();
    }
  }, []);

  const overallScroll = v => {
    setOverallScrerr(false);
    setOverall(v);
  };
  const Listining = v => {
    setisListingerr(false);
    setisListing(v);
  };
  const Reading = v => {
    setisreadingerr(false);
    setisreading(v);
  };
  const Writing = v => {
    setiswritingerr(false);
    setiswriting(v);
  };
  const Speaking = v => {
    setisSpeakingerr(false);
    setisSpeaking(v);
  };
  const isback = () => {
    props.navigation.goBack(' ');
  };
  const GetIELTS = () => {
    setloader(true);
    dispatch(UserDetailsAction.GetIELTSAction(userId)).then(async data => {
      if (data) {
        if (data.length > 0) {
          setOverall(data[0].overall_score), setisListing(data[0].listening);
          setisreading(data[0].reading);
          setiswriting(data[0].writing);
          setisSpeaking(data[0].speaking);
          setloader(false);
        } else {
          setloader(false);
        }
      } else {
        setloader(false);
      }
    });
  };

  const isPostELESTs_PTE = () => {
    if (overallScroll) {
      setloader(true);
      var data = new FormData();
      data.append('id', userId);
      data.append('overall_score', OverallScrole);
      data.append('listening', isListing);
      data.append('reading', isreading);
      data.append('writing', iswriting);
      data.append('speaking', isSpeaking);

      dispatch(UserDetailsAction.PostIELTSsAction(data)).then(async data => {
        setloader(false);

        props.navigation.push('PreviousRefusalScreen');
      });
    } else {
      props.navigation.push('PreviousRefusalScreen');
    }
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Avatar
          onPress={() => isback()}
          icon={{
            name: 'arrowleft',
            type: 'antdesign',
            color: Colors.DarkColor,
            size: 35,
          }}
          containerStyle={[styles.backicon]}
        />
        <Text style={[styles.headingText]}>IELTS/PTE</Text>
        <View style={[styles.MainView]}>
          <View style={[styles.textinputeview]}>
            <TextInput
              dense={true}
              placeholder="Enter yourband scores"
              placeholderTextColor={Colors.DarkColor}
              label="Overall band scores"
              value={OverallScrole}
              mode="outlined"
              onChangeText={overallScroll}
              keyboardType="phone-pad"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isoverallerr}
              style={{
                borderRadius: 50,
                color: Colors.Black,
                paddingTop: '2.5%',
              }}
            />
          </View>
          <View style={[styles.textinputeview]}>
            <TextInput
              dense={true}
              placeholder="Enter your listening scores"
              placeholderTextColor={Colors.DarkColor}
              label="Listening"
              value={isListing}
              mode="outlined"
              onChangeText={Listining}
              keyboardType="number-pad"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isListingerr}
              style={{
                borderRadius: 50,
                color: Colors.Black,
                paddingTop: '2.5%',
              }}
            />
          </View>
          <View style={[styles.textinputeview]}>
            <TextInput
              dense={true}
              placeholder="Enter your reading scores"
              placeholderTextColor={Colors.DarkColor}
              label="Reading"
              value={isreading}
              mode="outlined"
              onChangeText={Reading}
              keyboardType="phone-pad"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isreadingerr}
              style={{
                borderRadius: 50,
                color: Colors.Black,
                paddingTop: '2.5%',
              }}
            />
          </View>
          <View style={[styles.textinputeview]}>
            <TextInput
              dense={true}
              placeholder="Enter your writing scores"
              placeholderTextColor={Colors.DarkColor}
              label="Writing"
              value={iswriting}
              mode="outlined"
              onChangeText={Writing}
              keyboardType="numeric"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={iswritingerr}
              style={{
                borderRadius: 50,
                color: Colors.Black,
                paddingTop: '2.5%',
              }}
            />
          </View>

          <View style={[styles.textinputeview]}>
            <TextInput
              dense={true}
              placeholder="Enter your speaking scores"
              placeholderTextColor={Colors.DarkColor}
              label="Speaking"
              value={isSpeaking}
              mode="outlined"
              onChangeText={Speaking}
              keyboardType="numeric"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isSpeakingerr}
              style={{
                borderRadius: 50,
                color: Colors.Black,
                paddingTop: '2.5%',
              }}
            />
          </View>

          <View style={[styles.btn]}>
            <TouchComponent
              press={() => isPostELESTs_PTE()}
              title="Next"
              titlecolor={Colors.White}
              backgroundColor={Colors.DarkColor}
              borderRadius={borderRadius.BtnBr}
              paddingVertical={'8%'}
              fontSize={FontSize.btn}
            />
          </View>
          {isloader && (
            <Spinner
              visible={true}
              textContent={'please wait...'}
              textStyle={styles.loadertxt}
              overlayColor="rgba(0,0,0,0.9)"
              customIndicator={
                <UIActivityIndicator
                  style={styles.loaderstyle}
                  color={Colors.White}
                />
              }
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default StudentIELTSScreen;
