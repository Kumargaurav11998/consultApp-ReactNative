import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import {FontSize} from '../../utils/FontSize';
import {borderRadius} from '../../utils/size';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appdefultcolor,
  },
  headingText: {
    textAlign: 'center',
    marginTop: '5%',
    color: Colors.DarkColor,
    fontSize: FontSize.Heading,
  },

  backicon: {
    position: 'absolute',
    left: '5%',
    top: '2%',
  },
  MainView: {
    alignSelf: 'center',
    marginTop: '25%',
  },
  AvatarContainer: {
    alignSelf: 'center',
    marginTop: '10%',
    borderRadius: 10,
  },
  avatarStyle: {
    resizeMode: 'contain',
    borderRadius: 10,
    width: 100,
    height: 50,
  },
  btn: {
    marginTop: '10%',
    width: width / 2,
    alignSelf: 'center',
  },
  otpinputstyle: {
    width: width - 20,
    height: 60,
    alignSelf: 'center',
  },
  borderStyleHighLighted: {
    borderColor: Colors.DarkColor,
    borderWidth: 2,
    backgroundColor: Colors.White,
    height: 50,
    width: 50,
    borderRadius: borderRadius.BtnBr,
  },
  inpustyle: {
    borderColor: Colors.DarkColor,
    color: Colors.Black,
    borderWidth: 1.5,
    height: 50,
    width: 50,
    borderRadius: borderRadius.BtnBr,
  },
  lable: {
    color: Colors.Black,
    fontSize: FontSize.lable,
  },
  loadertxt: {
    color: Colors.White,
    marginTop: '90%',
  },
  loaderstyle: {
    marginTop: '100%',
  },
});
