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
  image: {
    width: '100%',
    height: 120,
    backgroundColor: color.SanMarino,
  },
  containerContent: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  containerInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
  },
  type: {
    fontSize: 12,
    fontWeight: '500',
    color: color.PokemonLogoDarkBlue,
  },
  titleInformation: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  valueInformation: {
    fontSize: 12,
    color: color.PokemonLogoDarkBlue,
    textAlign: 'center',
  },
});

export default styles;
