import {StyleSheet} from 'react-native';

import color from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 18,
    backgroundColor: color.PokemonLogoLightBlue,
    padding: 3,
  },
  selectedRadio: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
    backgroundColor: color.PokemonLogoYellow,
  },
  name: {
    flex: 1,
    paddingLeft: 10,
  },
});

export default styles;
