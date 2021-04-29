import {Dimensions} from 'react-native';

export const keyExtractor = (item, index) => index.toString();

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
const BASE_HEIGHT = 812;
const BASE_WIDTH = 375;

export const horizontalScale = size => (SCREEN_WIDTH / BASE_WIDTH) * size;
export const verticalScale = size => (SCREEN_HEIGHT / BASE_HEIGHT) * size;
export const toTitleCase = string => {
  if (typeof string !== 'string') {
    return false;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};
