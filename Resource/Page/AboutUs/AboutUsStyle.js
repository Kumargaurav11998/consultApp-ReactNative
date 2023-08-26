import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appdefultcolor,
  },
  Abouttxt: {
    marginLeft: '10%',
    marginTop: '5%',
  },
  avatarStyle: {
    resizeMode: 'contain',
  },
});
