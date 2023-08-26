import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './UpcommingAppointmentStyle';

function PastAppointmentScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.nobookingtxt]}>No Booking yet</Text>
    </SafeAreaView>
  );
}

export default PastAppointmentScreen;
