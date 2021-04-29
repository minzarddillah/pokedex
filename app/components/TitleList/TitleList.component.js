import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';

import styles from './TitleList.style';

const TitleList = ({onPress, disabled, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {!disabled && <Icon name="chevron-right" size={28} />}
    </TouchableOpacity>
  );
};

TitleList.defaultProps = {
  onPress: () => {},
  disabled: true,
  title: '',
};

TitleList.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string,
  onPress: PropTypes.func,
};

export default TitleList;
