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
  MainView: {
    alignSelf: 'center',
    marginTop: '15%',
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
  textinputeview: {
    width: width - 30,
    alignSelf: 'center',
  },
  textinputestyle: {
    borderColor: Colors.DarkColor,
    backgroundColor: Colors.White,
    color: Colors.Black,
    paddingTop: 8,
    height: 50,
  },
  btn: {
    marginTop: '10%',
    width: width / 2,
    alignSelf: 'center',
  },
  loadertxt: {
    color: Colors.White,
    marginTop: '90%',
  },
  loaderstyle: {
    marginTop: '100%',
  },
});
