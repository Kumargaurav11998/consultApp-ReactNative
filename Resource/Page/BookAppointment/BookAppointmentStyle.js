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
    marginTop: 17,
    color: Colors.DarkColor,
    fontSize: FontSize.Heading,
    alignSelf: 'center',
  },
  MainView: {
    alignSelf: 'center',
    marginTop: '15%',
  },
  titleStyle: {
    color: Colors.DarkColor,
    fontSize: FontSize.lable,
  },
  dropdownstyle: {
    marginTop: '4%',
  },
  textinputeview: {
    width: width - 30,
    alignSelf: 'center',
    marginTop: '2%',
  },
  textinputestyle: {
    height: 150,
    textAlignVertical: 'top',
    width: '100%',
  },
  subheadingview: {
    flexDirection: 'row',
    marginTop: '10%',
    width: width / 2,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  backicon: {
    position: 'absolute',
    left: '5%',
    top: 10,
  },
  label: {
    color: Colors.DarkColor,
    fontSize: FontSize.lable,
    marginBottom: '2%',
  },
  Datepickerstyle: {
    width: width - 30,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    height: 55,

    borderWidth: 1.5,
    borderRadius: 5,
  },
  dob: {
    marginTop: '5%',
    marginLeft: '0.5%',
    color: Colors.DarkColor,
  },
  dobView: {
    marginTop: '4%',
  },
  btn: {
    width: width / 2,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  overlaytxt: {
    marginTop: 0,
    color: Colors.White,
  },
  overlaycontainer: {
    alignSelf: 'center',
    margin: '5%',
  },
  overlaysty: {
    borderRadius: 20,
    backgroundColor: Colors.White,
  },
  toast: {
    color: Colors.red,
    backgroundColor: Colors.DarkColor,
    padding: 10,
    borderRadius: 8,
  },
});
