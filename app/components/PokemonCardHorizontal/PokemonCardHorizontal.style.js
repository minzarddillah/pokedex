import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
  containerDescription: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default styles;
