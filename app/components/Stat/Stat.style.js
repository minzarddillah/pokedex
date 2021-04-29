import {StyleSheet} from 'react-native';
import color from '../../utils/color';

const styles = StyleSheet.create({
  containerStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStat: {
    flex: 2,
    color: color.Scorpion,
  },
  baseStat: {
    flex: 1,
  },
  containerProgress: {
    flex: 7,
    height: 4,
    borderRadius: 4,
    backgroundColor: 'silver',
  },
  progress: {
    height: '100%',
  },
});

export default styles;
