import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import color from '../../utils/color';
import styles from './TabBar.style';

const TabBar = ({onPress, isSelected, data}) => {
  const titleStyle = {
    fontWeight: isSelected ? 'bold' : 'normal',
    color: isSelected ? color.Black : color.GullGray,
  };

  const borderStyle = {
    borderColor: isSelected ? color.PokemonLogoLightBlue : color.GullGray,
  };

  return (
    <TouchableOpacity
      disabled={isSelected}
      style={styles.container}
      onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{data.title}</Text>
      <View style={[styles.border, borderStyle]} />
    </TouchableOpacity>
  );
};

TabBar.propTypes = {
  onPress: PropTypes.func,
  isSelected: PropTypes.bool,
  data: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default TabBar;
