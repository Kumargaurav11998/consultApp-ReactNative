import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {CommonAction} from '../../Action/CommonAction';
import {styles} from './AboutUsStyle';
function AboutUsScreen() {
  const dispatch = useDispatch();
  const [isdata, setData] = useState();
  useEffect(() => {
    GetAboutUs();
  }, []);

  const GetAboutUs = () => {
    dispatch(CommonAction.GetCommonTermAndConditiontAction('about')).then(
      async data => {
        if (data) {
          setData(data[0]);
        }
      },
    );
  };
  return (
    <SafeAreaView style={[styles.container]}>
      {isdata && <Text style={[styles.Abouttxt]}>{isdata.content}</Text>}
    </SafeAreaView>
  );
}

export default AboutUsScreen;
