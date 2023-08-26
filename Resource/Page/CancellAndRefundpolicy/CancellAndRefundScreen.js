import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './CancellAndRefundStyle';
import {useDispatch} from 'react-redux';
import {CommonAction} from '../../Action/CommonAction';
function CancellAndRefundScreen() {
  const dispatch = useDispatch();
  const [isdata, setData] = useState();
  useEffect(() => {
    GetTermAndConDition();
  }, []);

  const GetTermAndConDition = () => {
    dispatch(CommonAction.GetCommonTermAndConditiontAction('refund')).then(
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
export default CancellAndRefundScreen;
