import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appdefultcolor,
  },
  emailtxt: {
    color: Colors.White,
    textAlign: 'center',
  },
  avatarStyle: {
    resizeMode: 'contain',
  },
  email: {
    marginTop: '5%',
    alignSelf: 'center',
    backgroundColor: Colors.DarkColor,
    padding: 10,
    borderRadius: 8,
    width: width / 2,
  },
});
