import {StyleSheet} from 'react-native';

import color from '../../utils/color';
import {SCREEN_WIDTH, verticalScale} from '../../utils/helper';

const styles = StyleSheet.create({
  containerBanner: {
    width: '100%',
    height: verticalScale(230),
    maxHeight: verticalScale(230),
  },
  paginationStyle: {
    bottom: 0,
    right: null,
    left: 20,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: color.PokemonLogoLightBlue,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: color.PokemonLogoYellow,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  containerImage: {
    padding: 20,
    width: SCREEN_WIDTH,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default styles;
