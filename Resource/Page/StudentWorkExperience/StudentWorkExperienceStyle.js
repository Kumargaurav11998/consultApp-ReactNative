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

  backicon: {
    position: 'absolute',
    left: '5%',
    top: '7%',
  },

  btn: {
    width: width / 2,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  loadertxt: {
    color: Colors.White,
    // marginTop:"90%"
  },
  loaderstyle: {
    //  marginTop:"100%",
  },
});
