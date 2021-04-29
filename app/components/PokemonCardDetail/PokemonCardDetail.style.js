import {StyleSheet} from 'react-native';
import color from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  containerTypes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  id: {
    color: color.GullGray,
    marginRight: 5,
    fontSize: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  typeName: {
    backgroundColor: color.SanMarino,
    color: color.White,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginHorizontal: 5,
    fontWeight: '600',
    fontSize: 12,
  },
});

export default styles;
