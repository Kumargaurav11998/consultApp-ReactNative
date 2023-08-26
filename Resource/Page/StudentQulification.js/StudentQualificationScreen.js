import {Avatar} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, ScrollView, View} from 'react-native';
import {Colors} from '../../utils/Colors';
import {styles} from './StudentQualificationStyle';
import {TextInput} from 'react-native-paper';
import TouchComponent from '../../Component/TouchComponent';
import {borderRadius} from '../../utils/size';
import {FontSize} from '../../utils/FontSize';
import {useDispatch, useSelector} from 'react-redux';
import {UserDetailsAction} from '../../Action/UserDetailsAction';
import moment from 'moment';
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
function StudentQualificationScreen(props) {
  const dispatch = useDispatch();
  const userId = useSelector(id => id.GetUerId.Getuserid.userid);
  const username = useSelector(id => id.GetUerId.Getuserid.username);
  const toast = useToast();
  const [isloader, setloader] = useState(false);
  const [isnameerror, setnameerror] = useState(false);
  const [is10thyears, set10years] = useState('');
  const [is10therror, set10error] = useState(false);
  const [is10thboard, set10board] = useState('');
  const [is10therrorboard, set10errorbord] = useState(false);
  const [is10thper, set10per] = useState('');
  const [is10therrorper, set10errorper] = useState(false);
  const [is12thyears, set12years] = useState('');
  const [is12therror, set12error] = useState(false);
  const [is12thboard, set12board] = useState('');
  const [is12therrorboard, set12errorbord] = useState(false);
  const [is12thper, set12per] = useState('');
  const [is12therrorper, set12errorper] = useState(false);
  const [isGradutaionstream, setisGradutaionstream] = useState('');
  const [isother, setother] = useState('');
  const [isGradutaionstreamyear, setisGradutaionstreamyear] = useState('');
  const [isGradutaionstreamper, setisGradutaionstreamper] = useState('');
  const [ismasterStream, setismasterStream] = useState('');
  const [ismasteryear, setismasteryears] = useState('');
  const [ismasterper, setismasterper] = useState('');
  const TenthYear = v => {
    set10error(false);
    set10years(v);
  };
  const Tenthboard = v => {
    set10errorbord(false);
    set10board(v);
  };
  const TenthPercentage = v => {
    set10errorper(false);
    set10per(v);
  };
  const twovelththYear = v => {
    set12error(false);
    set12years(v);
  };
  const twoevelthboard = v => {
    set12errorbord(false);
    set12board(v);
  };
  const twovelthPercentage = v => {
    set12errorper(false);
    set12per(v);
  };
  const graduYear = v => {
    setisGradutaionstreamyear(v);
  };
  const graduStream = v => {
    setisGradutaionstream(v);
  };
  const graduPercentage = v => {
    setisGradutaionstreamper(v);
  };
  const MasterYear = v => {
    setismasteryears(v);
  };
  const MasterStream = v => {
    setismasterStream(v);
  };
  const MasterPercentage = v => {
    setismasterper(v);
  };
  const Other = v => {
    setother(v);
  };

  useEffect(() => {
    if (username) {
      GetQualification();
    }
  }, []);
  const GetQualification = () => {
    setloader(true);
    dispatch(UserDetailsAction.GetqulificationAction(userId)).then(
      async data => {
        console.log(data);
        if (data) {
          set10years(data[0].grade_10_year);
          set10board(data[0].grade_10_board);
          set10per(data[0].grade_10_percent);
          set12years(data[0].grade_12_year);
          set12board(data[0].grade_12_board);
          set12per(data[0].grade_12_percent);
          setisGradutaionstream(
            data[0].gradu == 'undefined' ? '' : data[0].gradu,
          );
          setisGradutaionstreamyear(data[0].gradu_year);
          setisGradutaionstreamper(data[0].gradu_percent);
          setismasterStream(
            data[0].master == 'undefined' ? '' : data[0].master,
          );
          setismasteryears(data[0].master_year);
          setismasterper(data[0].master_percent);
          setother(data[0].others);
          setloader(false);
        } else {
          setloader(false);
        }
      },
    );
  };

  const isPostQulification = () => {
    if (!is10thyears) {
      set10error(true);
      toast.show({
        title: 'Please, Enter 10th passing year',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else if (!is10thboard) {
      set10errorbord(true);
      toast.show({
        title: 'Please, Enter 10th board',
        placement: 'bottom',
      });
    } else if (!is10thper) {
      set10errorper(true);
      toast.show({
        title: 'Please, Enter Percentage/CGPA ',
        placement: 'bottom',
      });
    } else {
      setloader(true);
      var data = new FormData();
      data.append('id', userId);
      data.append('grade_10_year', is10thyears);
      data.append('grade_10_board', is10thboard);
      data.append('grade_10_percent', is10thper);
      data.append('grade_12_year', is12thyears);
      data.append('grade_12_board', is12thboard);
      data.append('grade_12_percent', is12thper);
      data.append('gradu_year', isGradutaionstreamyear);
      data.append('gradu', isGradutaionstream);
      data.append('gradu_percent', isGradutaionstreamper);
      data.append('master_year', ismasteryear);
      data.append('master', ismasterStream);
      data.append('master_percent', ismasterper);
      data.append('others', isother);
      data.append('created_on', moment().format('YYYY-MM-DD  hh:mm:ss'));
      data.append('updated_on', moment().format('YYYY-MM-DD  hh:mm:ss'));

      dispatch(UserDetailsAction.PostStudentQualificationAction(data)).then(
        async data => {
          console.log(data);
          if (data.success) {
            setloader(false);
            props.navigation.navigate('StudentWorkExperienceScreen');
          } else {
            setloader(false);
            toast.show({
              title: data.message,
              placement: 'bottom',
            });
          }
        },
      );
    }
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Avatar
          onPress={() => props.navigation.goBack()}
          icon={{
            name: 'arrowleft',
            type: 'antdesign',
            color: Colors.DarkColor,
            size: 35,
          }}
          containerStyle={[styles.backicon]}
        />
        <Text style={[styles.headingText]}>QUALIFICATION</Text>
        <View style={[styles.MainView]}>
          <Text style={[styles.titleStyle]}>Grade 10th</Text>
          <View style={[styles.textinputeview]}>
            <TextInput
              dense={true}
              placeholder="Enter 10th passing year"
              placeholderTextColor={Colors.DarkColor}
              label="Year"
              keyboardType="number-pad"
              value={is10thyears}
              mode="outlined"
              onChangeText={TenthYear}
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={is10therror}
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
              placeholder="Enter 10th Board"
              placeholderTextColor={Colors.DarkColor}
              label="Board"
              value={is10thboard}
              mode="outlined"
              onChangeText={Tenthboard}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={is10therrorboard}
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
              placeholder="Enter 10th percentage"
              placeholderTextColor={Colors.DarkColor}
              label="Percentage/CGPA"
              value={is10thper}
              mode="outlined"
              onChangeText={TenthPercentage}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={is10therrorper}
              style={{
                borderRadius: 50,
                color: Colors.Black,
                paddingTop: '2.5%',
              }}
            />
          </View>
          <Text style={[styles.titleStyle, {marginTop: '3%'}]}>12th</Text>
          <View style={[styles.textinputeview]}>
            <TextInput
              dense={true}
              placeholder="Enter 12th passing year and Stream"
              placeholderTextColor={Colors.DarkColor}
              label="Year/Stream"
              value={is12thyears}
              mode="outlined"
              onChangeText={twovelththYear}
              keyboardType="numeric"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={is12therror}
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
              placeholder="Enter 12th Board"
              placeholderTextColor={Colors.DarkColor}
              label="Board"
              value={is12thboard}
              mode="outlined"
              onChangeText={twoevelthboard}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={is12therrorboard}
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
              placeholder="Enter 12th Percentage/CGPA"
              placeholderTextColor={Colors.DarkColor}
              label="Percentage/CGPA"
              value={is12thper}
              mode="outlined"
              onChangeText={twovelthPercentage}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={is12therrorper}
              style={{
                borderRadius: 50,
                color: Colors.Black,
                paddingTop: '2.5%',
              }}
            />
          </View>
          <Text style={[styles.titleStyle, {marginTop: '3%'}]}>Graduation</Text>
          <View style={[styles.textinputeview]}>
            <TextInput
              dense={true}
              placeholder="Enter Stream"
              placeholderTextColor={Colors.DarkColor}
              label="Stream"
              value={isGradutaionstream}
              mode="outlined"
              onChangeText={graduStream}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              //error={isnameerror}
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
              placeholder="Enter passing years"
              placeholderTextColor={Colors.DarkColor}
              label="Year"
              value={isGradutaionstreamyear}
              mode="outlined"
              onChangeText={graduYear}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              // error={isnameerror}
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
              placeholder="Enter Percentage/CGPA"
              placeholderTextColor={Colors.DarkColor}
              label="Percentage/CGPA"
              value={isGradutaionstreamper}
              mode="outlined"
              onChangeText={graduPercentage}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isnameerror}
              style={{
                borderRadius: 50,
                color: Colors.Black,
                paddingTop: '2.5%',
              }}
            />
          </View>
          <Text style={[styles.titleStyle, {marginTop: '3%'}]}>Masters</Text>
          <View style={[styles.textinputeview]}>
            <TextInput
              dense={true}
              placeholder="Enter Stream"
              placeholderTextColor={Colors.DarkColor}
              label="Stream"
              value={ismasterStream}
              mode="outlined"
              onChangeText={MasterStream}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
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
              placeholder="Enter passing years"
              placeholderTextColor={Colors.DarkColor}
              label="Year"
              value={ismasteryear}
              mode="outlined"
              onChangeText={MasterYear}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isnameerror}
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
              placeholder="Enter Percentage/CGPA"
              placeholderTextColor={Colors.DarkColor}
              label="Percentage/CGPA"
              value={ismasterper}
              mode="outlined"
              onChangeText={MasterPercentage}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              style={{
                borderRadius: 50,
                color: Colors.Black,
                paddingTop: '2.5%',
              }}
            />
          </View>
          <Text style={[styles.titleStyle, {marginTop: '3%'}]}>Other</Text>
          <View style={[styles.textinputeview]}>
            <TextInput
              dense={true}
              placeholder="Enter"
              placeholderTextColor={Colors.DarkColor}
              label="Other"
              value={isother}
              mode="outlined"
              onChangeText={Other}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              multiline={true}
              style={{
                borderRadius: 50,
                color: Colors.Black,
                paddingTop: '2.5%',
              }}
            />
          </View>
          <View style={[styles.btn]}>
            <TouchComponent
              press={() => isPostQulification()}
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
            overlayColor="rgba(0,0,0,0.9)"
            customIndicator={
              <UIActivityIndicator
                style={styles.loaderstyle}
                color={Colors.White}
              />
            }
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
export default StudentQualificationScreen;
