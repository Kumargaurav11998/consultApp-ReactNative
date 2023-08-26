import {Avatar} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, ScrollView, View} from 'react-native';
import {Colors} from '../../utils/Colors';
import {styles} from './StudentWorkExperienceStyle';
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
function StudentWorkExperienceScreen(props) {
  const dispatch = useDispatch();
  const userId = useSelector(id => id.GetUerId.Getuserid.userid);
  const username = useSelector(id => id.GetUerId.Getuserid.username);
  const toast = useToast();
  const [isloader, setloader] = useState(false);
  const [isworkExp, setWorkExp] = useState('');
  const [isWorkExpError, setWorkExpError] = useState(false);
  const isWorkExpChange = v => {
    setWorkExpError(false);
    setWorkExp(v);
  };

  useEffect(() => {
    if (username) {
      GetWorkExepriance();
    }
  }, []);

  const GetWorkExepriance = () => {
    setloader(true);
    dispatch(UserDetailsAction.GetWorkExeprianceAction(userId)).then(
      async data => {
        console.log(data);
        if (data.length > 0) {
          setWorkExp(data[0].work_exp);
          setloader(false);
        } else {
          setloader(false);
        }
      },
    );
  };

  const isPostWorkExp = () => {
    if (!isworkExp) {
      props.navigation.push('StudentMaritalStatusScreen');
    } else {
      setloader(true);
      var data = new FormData();
      data.append('id', userId);
      data.append('work_exp', isworkExp);
      dispatch(UserDetailsAction.PostStudentwORKEXPAction(data)).then(
        async data => {
          setloader(false);

          props.navigation.push('StudentMaritalStatusScreen');
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
        <Text style={[styles.headingText]}>WORK EXPERIENCE</Text>
        <View style={[styles.MainView]}>
          <View style={[styles.textinputeview]}>
            <TextInput
              dense={true}
              placeholder="Enter your work experience, if you have any"
              placeholderTextColor={Colors.DarkColor}
              label="Work Experience (if Any)"
              value={isworkExp}
              mode="outlined"
              onChangeText={isWorkExpChange}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isWorkExpError}
              style={styles.textinputestyle}
              textAlignVertical={true}
              multiline={true}
            />
          </View>
          <View style={[styles.btn]}>
            <TouchComponent
              press={() => isPostWorkExp()}
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

export default StudentWorkExperienceScreen;
