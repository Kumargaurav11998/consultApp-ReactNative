import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {RadioButton, TextInput} from 'react-native-paper';
import {Colors} from '../../utils/Colors';
import TouchComponent from '../../Component/TouchComponent';
import {borderRadius} from '../../utils/size';
import {FontSize} from '../../utils/FontSize';
import {styles} from './PreviousRefusalStyle';
import {Avatar} from '@rneui/base';
import {useToast} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {UserDetailsAction} from '../../Action/UserDetailsAction';
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
function PreviousRefusalScreen(props) {
  const dispatch = useDispatch();
  const username = useSelector(id => id.GetUerId.Getuserid.username);
  const userId = useSelector(id => id.GetUerId.Getuserid.userid);
  const toast = useToast();
  const [isloader, setloader] = useState(false);
  const [checked, setChecked] = useState('Yes');
  const [isname, setname] = useState('');
  const [isnameerror, setnameerror] = useState(false);
  const [iscountry, setiscountry] = useState('');
  const [iscourse, setiscourse] = useState('');
  const [isCollage, setisCollage] = useState('');
  const [isagentinfo, setagentinfo] = useState('');

  useEffect(() => {
    GetPreviousRefusal();
  }, []);

  const Name = v => {
    setnameerror(false);
    setname(v);
  };
  const Country = v => {
    setiscountry(v);
  };
  const collage = v => {
    setisCollage(v);
  };
  const Course = v => {
    setiscourse(v);
  };
  const AgentInfo = v => {
    setagentinfo(v);
  };

  const GetPreviousRefusal = () => {
    setloader(true);
    dispatch(UserDetailsAction.GetPreviousRefusalAction(userId)).then(
      async data => {
        console.log(data, '*d*');
        if (data) {
          if (data.length > 0) {
            setChecked(data[0].yes_no == 1 ? 'Yes' : 'no');
            setiscountry(data[0].country);
            setisCollage(data[0].prev_college);
            setiscourse(data[0].prev_course);
            setagentinfo(data[0].agent_info);
            setloader(false);
          } else {
            setloader(false);
          }
        } else {
          setloader(false);
        }
      },
    );
  };
  const isPostPreviousRefusal = () => {
    setloader(true);
    var data = new FormData();
    data.append('id', userId);
    data.append('yes_no', checked == 'Yes' ? 1 : 0);
    data.append('country', iscountry);
    data.append('prev_college', isCollage);
    data.append('prev_course', iscourse);
    data.append('agent_info', isagentinfo);

    dispatch(UserDetailsAction.PostPreRefusalAction(data)).then(async data => {
      console.log(data);
      setloader(false);
      toast.show({
        title: data.message,
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
      props.navigation.push('TabNavigation');
    });
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
        <Text style={[styles.headingText]}>Previous Refusal</Text>
        <View style={[styles.MainView]}>
          <View>
            <View style={[styles.radiobtn]}>
              <RadioButton
                value="Yes"
                status={checked === 'Yes' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Yes')}
                color={Colors.DarkColor}
                uncheckedColor={Colors.DarkColor}
              />
              <Text style={[styles.label]}>Yes</Text>
            </View>
            <View style={[styles.radiobtn]}>
              <RadioButton
                value="No"
                status={checked === 'No' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('No')}
                color={Colors.DarkColor}
                uncheckedColor={Colors.DarkColor}
              />
              <Text style={[styles.label]}>No</Text>
            </View>
          </View>
          {checked == 'Yes' && (
            <>
              <View style={[styles.textinputeview]}>
                <TextInput
                  dense={true}
                  placeholder="Enter country name"
                  placeholderTextColor={Colors.DarkColor}
                  label="Country"
                  value={iscountry}
                  mode="outlined"
                  onChangeText={Country}
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
                  placeholder="Enter previous collage"
                  placeholderTextColor={Colors.DarkColor}
                  label="College"
                  value={isCollage}
                  mode="outlined"
                  onChangeText={collage}
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
                  placeholder="Enter previous course"
                  placeholderTextColor={Colors.DarkColor}
                  label="Course"
                  value={iscourse}
                  mode="outlined"
                  onChangeText={Course}
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
                  placeholder="Enter agent info"
                  placeholderTextColor={Colors.DarkColor}
                  label="Agent Info"
                  value={isagentinfo}
                  mode="outlined"
                  onChangeText={AgentInfo}
                  keyboardType="default"
                  activeOutlineColor={Colors.DarkColor}
                  outlineColor={Colors.DarkColor}
                  error={isnameerror}
                  multiline={true}
                  style={{
                    borderRadius: 50,
                    color: Colors.Black,
                    paddingTop: '2.5%',
                  }}
                />
              </View>
            </>
          )}
          <View style={[styles.btn]}>
            <TouchComponent
              press={() => isPostPreviousRefusal()}
              title="Submit"
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

export default PreviousRefusalScreen;
