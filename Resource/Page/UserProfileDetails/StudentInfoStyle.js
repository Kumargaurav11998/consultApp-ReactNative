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
    marginTop: '8%',
    color: Colors.DarkColor,
    fontSize: FontSize.Heading,
    alignSelf: 'center',
  },
  MainView: {
    alignSelf: 'center',
    marginTop: '5%',
  },
  titleStyle: {
    color: Colors.DarkColor,
    fontSize: FontSize.lable,
  },
  subheadcavtar: {
    borderWidth: 2,
    borderColor: Colors.DarkColor,
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
    paddingTop: '2.5%',
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
    top: '2.8%',
  },
  SUBHEADING: {
    color: Colors.DarkColor,
    fontSize: FontSize.lable,
    marginTop: '2.5%',
    borderBottomWidth: 2,
    borderBottomColor: Colors.liteColor,
  },
  Datepickerstyle: {
    width: width - 30,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    height: 55,
    marginTop: '4%',
    borderWidth: 1,
    borderRadius: 5,
  },
  dob: {
    marginTop: '5%',
    marginLeft: '4%',
    color: Colors.Black,
  },
  btn: {
    width: width / 2,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  loadertxt: {
    color: Colors.White,
    marginTop: '90%',
  },
  loaderstyle: {
    // marginTop:"100%",
  },
});
