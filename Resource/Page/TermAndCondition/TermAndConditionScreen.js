import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './TermAndConditionStyle';
import {useDispatch} from 'react-redux';
import {CommonAction} from '../../Action/CommonAction';
function TermAndConditionScreen() {
  const dispatch = useDispatch();
  const [isdata, setData] = useState();
  useEffect(() => {
    GetTermAndConDition();
  }, []);

  const GetTermAndConDition = () => {
    dispatch(CommonAction.GetCommonTermAndConditiontAction('terms')).then(
      async data => {
        console.log(data);
        if (data) {
          setData(data[0]);
        }
      },
    );
  };
  return (
    <SafeAreaView style={[styles.container]}>
      {isdata && <Text style={[styles.termtxt]}>{isdata.content}</Text>}
    </SafeAreaView>
  );
}

export default TermAndConditionScreen;
