import {Avatar} from '@rneui/base';
import {View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {Colors} from '../../utils/Colors';
import {styles} from './StudentMaritalStatusStyle';
import {RadioButton, TextInput} from 'react-native-paper';
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
function StudentMaritalStatusScreen(props) {
  const dispatch = useDispatch();
  const userId = useSelector(id => id.GetUerId.Getuserid.userid);
  const toast = useToast();
  const [isloader, setloader] = useState(false);
  const [checked, setChecked] = useState('Single');
  const [isname, setname] = useState('');
  const [isnameerror, setnameerror] = useState(false);
  const [isOccupation, setisOccupation] = useState('');

  const Name = v => {
    setnameerror(false);
    setname(v);
  };
  const Occupation = v => {
    setisOccupation(v);
  };

  useEffect(() => {
    GetMeritalStatus();
  }, []);

  const GetMeritalStatus = () => {
    setloader(true);
    dispatch(UserDetailsAction.GetMeritalStatusAction(userId)).then(
      async data => {
        if (data) {
          if (data.length > 0) {
            setChecked(data[0].single_married);
            setname(data[0].spouse_name);
            setisOccupation(data[0].occupation);
            setloader(false);
          }
          setloader(false);
        } else {
          setloader(false);
        }
      },
    );
  };

  const isPostMaritalStatus = () => {
    setloader(true);
    var data = new FormData();
    data.append('id', userId);
    data.append('single_married', checked);
    data.append('spouse_name', isname);
    data.append('occupation', isOccupation);

    dispatch(UserDetailsAction.PostMeritalStatusAction(data)).then(
      async data => {
        setloader(false);

        props.navigation.push('StudentIELTSScreen');
      },
    );
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
        <Text style={[styles.headingText]}>MARITAL STATUS</Text>

        <View style={[styles.MainView]}>
          <View>
            <View style={[styles.radiobtn]}>
              <RadioButton
                value="Single"
                status={checked === 'Single' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Single')}
                color={Colors.DarkColor}
                uncheckedColor={Colors.DarkColor}
              />
              <Text style={[styles.label]}>Single</Text>
            </View>
            <View style={[styles.radiobtn]}>
              <RadioButton
                value="Married"
                status={checked === 'Married' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Married')}
                color={Colors.DarkColor}
                uncheckedColor={Colors.DarkColor}
              />
              <Text style={[styles.label]}>Married</Text>
            </View>
          </View>
          {checked == 'Married' && (
            <>
              <View style={[styles.textinputeview]}>
                <TextInput
                  dense={true}
                  placeholder="Enter your Spouse's Name"
                  placeholderTextColor={Colors.DarkColor}
                  label="Spouse Name"
                  value={isname}
                  mode="outlined"
                  onChangeText={Name}
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
                  placeholder="Enter your Spouse's occupation"
                  placeholderTextColor={Colors.DarkColor}
                  label="Occupation"
                  value={isOccupation}
                  mode="outlined"
                  onChangeText={Occupation}
                  keyboardType="default"
                  activeOutlineColor={Colors.DarkColor}
                  outlineColor={Colors.DarkColor}
                  //  error={isnameerror}
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
              press={() => isPostMaritalStatus()}
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

export default StudentMaritalStatusScreen;
