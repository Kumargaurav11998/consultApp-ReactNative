import React, {useState} from 'react';
import {Avatar, Overlay} from '@rneui/base';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../utils/Colors';
import {styles} from './BookAppointmentStyle';
import {useToast} from 'native-base';
import TouchComponent from '../../Component/TouchComponent';
import {borderRadius} from '../../utils/size';
import {FontSize} from '../../utils/FontSize';
import DatePicker from 'react-native-date-picker';
import TimeSlotDropDown from '../../Component/TimeSlotDropDown';
import TextInputeComponent from '../../Component/TextInputeComponent';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {CommonAction} from '../../Action/CommonAction';
import {Timeslotis} from '../../Helper/Constant';
import {AppointmentAction} from '../../Action/AppointmentAction';
import RazorpayCheckout from 'react-native-razorpay';
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
import {PaymentAction} from '../../Action/PaymentAction';
function BookAppointmentScreen(props) {
  const [isname, setname] = useState('');
  const [iscouponcode, setcouponcode] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isDOB, setDob] = useState('');
  const [TimeSlotData, setTimeSlotData] = useState([]);
  const [selectedTimeSlot, SetSelectedtimeSlot] = useState('');
  const [isloader, setloader] = useState(false);
  const [visible, setVisible] = useState(false);
  const [paymentSuccess, setpayment] = useState(true);
  const dispatch = useDispatch();
  const userId = useSelector(id => id.GetUerId.Getuserid.userid);
  const username = useSelector(id => id.GetUerId.Getuserid.username);
  const userEmail = useSelector(state => state.AuthReducer.authuser[0].email);
  const userMobile = useSelector(id => id.GetUerId.Getuserid.userContact);

  const toast = useToast();
  const isNext = () => {
    props.navigation.navigate('');
  };
  // var m = || Timeslotis[0].label>data[0].time_to
  const isTimeSlot = date => {
    let day = moment(date).format('dddd');
    dispatch(CommonAction.GetTimeSlotAction(day)).then(async data => {
      var v = Timeslotis.filter((item, i) => {
        return (
          data[0].time_from < Timeslotis[i].label &&
          data[0].time_to > Timeslotis[i].label
        );
      });
      setTimeSlotData(v);
    });
  };

  const isBookAppintment = () => {
    if (!isname) {
      toast.show({
        title: 'Please, Enter Country Name',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else if (!isDOB) {
      toast.show({
        title: 'Please, Select Date',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else if (!selectedTimeSlot) {
      toast.show({
        title: 'Please, Select Time Slot',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else {
      setloader(true);
      var data = new FormData();
      data.append('id', userId);
      data.append('country', isname);
      data.append('date', moment(isDOB).format('YYYY-MM-DD'));
      data.append('time', selectedTimeSlot);
      dispatch(AppointmentAction.BookAppointmentAction(data)).then(
        async data => {
          console.log(data, 'book');
          if (data) {
            if (data.success == true) {
              setloader(false);
              if (iscouponcode) {
                props.navigation.replace('TopTabNavigation');
              } else {
                MakePayment(data.appoint_id);
              }
            } else {
              setloader(false);
              toast.show({
                render: () => {
                  return <Text style={[styles.toast]}>{data.message}</Text>;
                },
              });
            }
          }
        },
      );
      setTimeout(() => {
        setloader(false);
      }, 5000);
    }
  };

  const MakePayment = bookingid => {
    var options = {
      description: 'Appointment Fee',
      //image: require('../../Assets/Photos/logo.png'),
      currency: 'INR',
      key: 'rzp_test_0Zb73kAR9lJDuj', // Your api key
      amount: 5000 * 10,
      name: 'Angels Immigration ',
      prefill: {
        email: userEmail,
        contact: userMobile,
        name: username,
      },
      theme: {color: Colors.appdefultcolor},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        toggleOverlay();
        var Data = new FormData();
        Data.append('stu_id', userId);
        Data.append('appoint_id', bookingid);
        Data.append('amount', 500),
          Data.append('trans_id', data.razorpay_payment_id);
        Data.append('status', 'success');
        Data.append('createdon', moment().format('YYYY-MM-DD hh:mm:ss'));
        dispatch(PaymentAction.PostPaymentSuccessfulDetail(Data)).then(
          async data => {
            if (data) {
              setpayment(true);
              props.navigation.replace('TopTabNavigation');
            }
            console.log('Save', data);
          },
        );
      })
      .catch(error => {
        // handle failure
        setpayment(false);
        toggleOverlay();
        console.log(error, 'error');
      });
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <>
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
          <Text style={[styles.headingText]}>Book Appointment</Text>

          <View style={[styles.MainView]}>
            <View style={[styles.textinputeview]}>
              <Text style={[styles.label]}>Interested Country</Text>
              <TextInputeComponent
                placeholder="Enter country you interested "
                placeholderTextColor={Colors.DarkColor}
                backgroundColor={Colors.White}
                borderWidth={1.5}
                borderRadius={5}
                height={55}
                onchange={v => setname(v)}
              />
            </View>

            <View style={[styles.dobView]}>
              <Text style={[styles.label]}>Appointment Date</Text>
              <TouchableOpacity
                style={[styles.Datepickerstyle]}
                onPress={() => setOpen(true)}>
                <Text style={[styles.dob]}>
                  {isDOB ? date.toDateString() : ' Select appointment date'}
                </Text>

                <DatePicker
                  minimumDate={new Date()}
                  mode="date"
                  title="Select appointment date"
                  textColor={Colors.DarkColor}
                  fadeToColor={Colors.appdefultcolor}
                  modal
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                    setDob(date);
                    isTimeSlot(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.dropdownstyle]}>
              <Text style={[styles.label]}>Time Slot</Text>
              <TimeSlotDropDown
                data={TimeSlotData}
                title="Select Time Slot"
                getTimeSlot={v => {
                  SetSelectedtimeSlot(v);
                }}
              />
            </View>
            <View style={[styles.textinputeview]}>
              <Text style={[styles.label]}>Coupon Code</Text>
              <TextInputeComponent
                placeholder="Enter coupon Code (If any)"
                placeholderTextColor={Colors.DarkColor}
                backgroundColor={Colors.White}
                borderWidth={1.5}
                borderRadius={5}
                height={55}
                secureTextEntry={true}
                onchange={v => setcouponcode(v)}
              />
            </View>
            <View style={[styles.btn]}>
              <TouchComponent
                press={() => isBookAppintment()}
                title="Book Appointment"
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
              textStyle={{color: Colors.White}}
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
      <Overlay
        isVisible={visible}
        overlayStyle={styles.overlaysty}
        onBackdropPress={toggleOverlay}>
        {paymentSuccess ? (
          <>
            <Text style={[styles.headingText, styles.overlaytxt]}>
              Appointment Booked Successful!
            </Text>
            <Avatar
              source={require('../../Assets/Photos/correct.png')}
              size={70}
              containerStyle={[styles.overlaycontainer]}
            />
          </>
        ) : (
          <>
            <Text style={[styles.headingText, styles.overlaytxt]}>Failed</Text>
            <Avatar
              source={require('../../Assets/Photos/sad.png')}
              size={70}
              containerStyle={[styles.overlaycontainer]}
            />
          </>
        )}
      </Overlay>
    </>
  );
}

export default BookAppointmentScreen;
