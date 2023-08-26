import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import {FontSize} from '../../utils/FontSize';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appdefultcolor,
  },
  containerStylecard: {
    alignSelf: 'center',
    width: width - 40,
    backgroundColor: Colors.appdefultcolor,
    borderRadius: 10,
    elevation: 5,
  },
  wrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardtxt: {
    marginVertical: '1%',
    color: Colors.Black,
    fontSize: FontSize.btn,
  },
  cardtxtc: {
    marginVertical: '1%',
    color: Colors.White,
    fontSize: FontSize.btn,
  },
  nobookingtxt: {
    alignSelf: 'center',
    marginTop: '50%',
    color: Colors.Black,
  },
});
