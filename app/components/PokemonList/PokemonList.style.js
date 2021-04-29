import {StyleSheet} from 'react-native';

import color from '../../utils/color';

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
    paddingBottom: 20,
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
