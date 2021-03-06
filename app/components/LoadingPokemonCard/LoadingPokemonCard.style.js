import {StyleSheet} from 'react-native';
import color from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    width: 250,
    height: 280,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: color.White,
  },
  shadow: {
    shadowColor: color.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default styles;
