import {Avatar} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from '../../utils/Colors';
import {styles} from './StudentInfoStyle';
import DatePicker from 'react-native-date-picker';
import TouchComponent from '../../Component/TouchComponent';
import {borderRadius} from '../../utils/size';
import {FontSize} from '../../utils/FontSize';
import {useDispatch, useSelector} from 'react-redux';
import {useToast} from 'native-base';
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
function StudentInfoScreen(props) {
  const [isloader, setloader] = useState(false);
  const [isname, setname] = useState('');
  const [isnameerror, setnameerror] = useState(false);
  const [isEmail, setEmailname] = useState('');
  const [isEmailerror, setEmailerror] = useState(false);
  const [isParentsOccupation, setOccupation] = useState('');
  const [isPOerror, setPOerror] = useState(false);
  const [isAnnualIncome, setAnnualIncome] = useState('');
  const [isAnnualIncomeerror, setAnnualIncomeerror] = useState(false);
  const [isSuttdentWN, setSuttdentWN] = useState('');
  const [isSuttdentWNError, setSuttdentWNError] = useState(false);
  const [isParentsWN, setParentsWN] = useState('');
  const [isParentsError, setparentsError] = useState(false);
  const [isDistrict, setDistrict] = useState('');
  const [isDistrictErroe, setDistrictError] = useState(false);
  const [isFullAddress, setisFullAddress] = useState('');
  const [isFullAdderror, setFullAdderror] = useState(false);
  const [date, setDate] = useState(new Date('2000-01-01'));
  const [open, setOpen] = useState(false);
  const [isDOB, setDob] = useState('');
  const reg = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  const userId = useSelector(id => id.GetUerId.Getuserid.userid);
  const username = useSelector(id => id.GetUerId.Getuserid.username);
  const userinfo = useSelector(
    state => state.GetStudentInfoReducer.getStudentinfo[0],
  );
  const dispatch = useDispatch();
  const toast = useToast();
  const Name = v => {
    setnameerror(false);
    setname(v);
  };
  const isEmailChange = v => {
    setEmailerror(false);
    setEmailname(v);
  };
  const isPO = v => {
    setPOerror(false);
    setOccupation(v);
  };
  const isAnnualIncomeChange = v => {
    setAnnualIncomeerror(false);
    setAnnualIncome(v);
  };
  const StudentWhatsAppNumber = v => {
    setSuttdentWNError(false);
    setSuttdentWN(v);
    if (reg.test(v) === false) {
      setSuttdentWNError(true);
    }
  };
  const ParentsWhatsAppNumber = v => {
    setparentsError(false);
    setParentsWN(v);
    if (reg.test(v) === false) {
      setparentsError(true);
    }
  };
  const isDistrictChange = v => {
    setDistrictError(false);
    setDistrict(v);
  };
  const isFullAddchange = v => {
    setFullAdderror(false);
    setisFullAddress(v);
  };

  useEffect(() => {
    if (userinfo) {
      setname(userinfo.name);
      setEmailname(userinfo.email);
      setOccupation(userinfo.parent_occu);
      setDob(userinfo.dob);
      setAnnualIncome(userinfo.annual_income);
      setSuttdentWN(userinfo.whatsapp_student);
      setParentsWN(userinfo.whatsapp_parent);
      setDistrict(userinfo.district);
      setisFullAddress(userinfo.address);
    } else if (username) {
      GetStudentInfo();
    }
  }, []);

  const GetStudentInfo = () => {
    setloader(true);
    dispatch(UserDetailsAction.GetStudentInfoAction(userId)).then(
      async data => {
        if (data) {
          setname(data[0].name);
          setEmailname(data[0].email);
          setOccupation(data[0].parent_occu);
          setDob(data[0].dob);
          setAnnualIncome(data[0].annual_income);
          setSuttdentWN(data[0].whatsapp_student);
          setParentsWN(data[0].whatsapp_parent);
          setDistrict(data[0].district);
          setisFullAddress(data[0].address);
          setloader(false);
        } else {
          setloader(false);
        }
      },
    );
    setTimeout(() => {
      setloader(false);
    }, 500000);
  };

  const PostStudentinfo = () => {
    if (!isname) {
      setnameerror(true);
      toast.show({
        title: 'Please, Enter Name',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else if (!isEmail) {
      setEmailerror(true);
      toast.show({
        title: 'Please, Enter Email-Id',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else if (!isDOB) {
      toast.show({
        title: 'Please, Select Date Of Birth.',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else if (!isParentsOccupation) {
      console.log(isParentsOccupation);
      setPOerror(true);
      toast.show({
        title: "Please,Enter parent's occupation",
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else if (!isAnnualIncome) {
      setPOerror(true);
      toast.show({
        title: "Please, Enter parent's Annual Income",
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else if (!isSuttdentWN) {
      setSuttdentWNError(true);
      toast.show({
        title: 'Please, Enter Whatsapp No. (Student) ',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else if (!isParentsWN) {
      setparentsError(true);
      toast.show({
        title: 'Please, Enter Whatsapp No. (Parents) ',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else if (!isDistrict) {
      setDistrictError(true);
      toast.show({
        title: 'Please, Enter Your District',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else if (!isFullAddress) {
      setFullAdderror(true);
      toast.show({
        title: 'Please, Enter Your Full Address',
        placement: 'bottom',
        backgroundColor: Colors.DarkColor,
      });
    } else {
      setloader(true);

      var data = new FormData();
      data.append('id', userId);
      data.append('name', isname);
      data.append('email', isEmail);
      data.append('dob', moment(isDOB).format('YYYY-MM-DD'));
      data.append('parent_occu', isParentsOccupation);
      data.append('annual_income', isAnnualIncome);
      data.append('whatsapp_student', isSuttdentWN);
      data.append('whatsapp_parent', isParentsWN);
      data.append('district', isDistrict);
      data.append('address', isFullAddress);
      data.append('created_on', moment().format('YYYY-MM-DD  hh:mm:ss'));
      data.append('updated_on', moment().format('YYYY-MM-DD  hh:mm:ss'));
      dispatch(UserDetailsAction.PostStudentInfoAction(data)).then(
        async data => {
          if (data.success) {
            setloader(false);
            props.navigation.navigate('StudentQualificationScreen');
            dispatch(UserDetailsAction.GetStudentInfoAction(userId));
          } else {
            setloader(false);
            toast.show({
              title: data.message,
              placement: 'bottom',
              backgroundColor: Colors.DarkColor,
            });
          }
        },
      );
    }
  };

  const isBack = () => {
    console.log('Back');
    props.navigation.goBack('');
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => isBack()} style={styles.backicon}>
          <Avatar
            // size={70}
            icon={{
              name: 'arrowleft',
              type: 'antdesign',
              color: Colors.DarkColor,
              size: 35,
            }}
            //  iconStyle={{marginTop:5}}
            containerStyle={{}}
          />
        </TouchableOpacity>

        <Text style={[styles.headingText]}>STUDENT INFO</Text>

        <View style={[styles.MainView]}>
          <View style={[styles.textinputeview]}>
            <TextInput
              dense={true}
              placeholder="Enter your name"
              placeholderTextColor={Colors.DarkColor}
              label="Name"
              value={isname}
              mode="outlined"
              onChangeText={Name}
              keyboardType="default"
              activeOutlineColor={Colors.Black}
              outlineColor={Colors.Black}
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
              placeholder="Enter your email-id"
              placeholderTextColor={Colors.DarkColor}
              label="Email-Id"
              value={isEmail}
              mode="outlined"
              onChangeText={isEmailChange}
              keyboardType="email-address"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isEmailerror}
              style={{
                borderRadius: 50,
                color: Colors.Black,
                paddingTop: '2.5%',
              }}
            />
          </View>

          <TouchableOpacity
            style={[styles.Datepickerstyle]}
            onPress={() => setOpen(true)}>
            <Text style={[styles.dob]}>
              {isDOB ? date.toDateString() : 'D.O.B'}
            </Text>

            <DatePicker
              maximumDate={new Date()}
              mode="date"
              title="Select date of birth"
              textColor={Colors.DarkColor}
              fadeToColor={Colors.appdefultcolor}
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
                setDob(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </TouchableOpacity>

          <View style={[styles.textinputeview]}>
            <TextInput
              dense={true}
              placeholder="Enter parents occupation."
              placeholderTextColor={Colors.DarkColor}
              label="Parents Occupation"
              value={isParentsOccupation}
              mode="outlined"
              onChangeText={isPO}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isPOerror}
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
              placeholder="Enter annual income."
              placeholderTextColor={Colors.DarkColor}
              label="Annual Income"
              value={isAnnualIncome}
              mode="outlined"
              onChangeText={isAnnualIncomeChange}
              keyboardType="number-pad"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isAnnualIncomeerror}
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
              placeholder="Enter student's Whatsapp number."
              placeholderTextColor={Colors.DarkColor}
              label="Whatsapp No. (Student)"
              value={isSuttdentWN}
              mode="outlined"
              onChangeText={StudentWhatsAppNumber}
              keyboardType="number-pad"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isSuttdentWNError}
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
              placeholder="Enter parent's Whatsapp number."
              placeholderTextColor={Colors.DarkColor}
              label="Whatsapp No. (Parents)"
              value={isParentsWN}
              mode="outlined"
              onChangeText={ParentsWhatsAppNumber}
              keyboardType="number-pad"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isParentsError}
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
              placeholder="Enter your district"
              placeholderTextColor={Colors.DarkColor}
              label="District"
              value={isDistrict}
              mode="outlined"
              onChangeText={isDistrictChange}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isDistrictErroe}
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
              placeholder="Enter your full address"
              placeholderTextColor={Colors.DarkColor}
              label="Address"
              value={isFullAddress}
              mode="outlined"
              onChangeText={isFullAddchange}
              keyboardType="default"
              activeOutlineColor={Colors.DarkColor}
              outlineColor={Colors.DarkColor}
              error={isFullAdderror}
              style={styles.textinputestyle}
              textAlignVertical={true}
              multiline={true}
            />
          </View>
          <View style={[styles.btn]}>
            <TouchComponent
              press={() => PostStudentinfo()}
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

export default StudentInfoScreen;
