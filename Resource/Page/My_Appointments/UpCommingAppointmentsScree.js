import {Card} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';
import Spinner from 'react-native-loading-spinner-overlay';
import {useDispatch, useSelector} from 'react-redux';
import {AppointmentAction} from '../../Action/AppointmentAction';
import {Colors} from '../../utils/Colors';
import {styles} from './UpcommingAppointmentStyle';

function UpCommingAppointmentScreen() {
  const [isAppointmentData, setAppontmentData] = useState([]);

  const [isloader, setloader] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector(id => id.GetUerId.Getuserid.userid);
  useEffect(() => {
    setloader(true);
    dispatch(AppointmentAction.GetUpComingAppointmentAction(userId)).then(
      async data => {
        console.log(data, '------');
        if (data) {
          if (data.length > 0) {
            setAppontmentData(data);
            setloader(false);
          }
        }
      },
    );
  }, []);
  return (
    <SafeAreaView style={[styles.container]}>
      {isloader ? (
        <UIActivityIndicator style={styles.loaderstyle} color={Colors.White} />
      ) : (
        <>
          {isAppointmentData.length > 0 ? (
            <View>
              <FlatList
                data={isAppointmentData}
                keyExtractor={item => item.id + Math.random()}
                renderItem={({item}) => (
                  <Card
                    wrapperStyle={styles.wrapperStyle}
                    containerStyle={[styles.containerStylecard]}>
                    <View>
                      <Text style={styles.cardtxt}>Appointment Id</Text>
                      <Text style={styles.cardtxt}>Intrested Country</Text>
                      <Text style={styles.cardtxt}>Date</Text>
                      <Text style={styles.cardtxt}>Time</Text>
                    </View>
                    <View>
                      <Text style={styles.cardtxtc}>Appointment id</Text>
                      <Text style={styles.cardtxtc}>{item.country}</Text>
                      <Text style={styles.cardtxtc}>{item.date}</Text>
                      <Text style={styles.cardtxtc}>{item.time}</Text>
                    </View>
                  </Card>
                )}
              />
            </View>
          ) : (
            <Text style={[styles.nobookingtxt]}>No Booking yet</Text>
          )}
        </>
      )}
    </SafeAreaView>
  );
}

export default UpCommingAppointmentScreen;
