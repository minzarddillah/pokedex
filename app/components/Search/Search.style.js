import {StyleSheet} from 'react-native';
import color from '../../utils/color';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: color.HawkesBlue,
    borderRadius: 15,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 18,
    alignItems: 'center',
    flex: 1,
  },
  input: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
    height: '100%',
    color: color.GullGray,
  },
});

export default styles;
