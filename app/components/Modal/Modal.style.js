import {StyleSheet} from 'react-native';
import color from '../../utils/color';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingTop: 61 + 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  container: {
    backgroundColor: color.White,
    borderRadius: 20,
    flex: 1,
    overflow: 'hidden',
  },
  buttonApply: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.PokemonLogoDarkBlue,
  },
  textButtonApply: {
    fontSize: 18,
    fontWeight: '600',
    color: color.White,
  },
});

export default styles;
