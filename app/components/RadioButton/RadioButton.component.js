import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './RadioButton.style';

const RadioButton = ({name, value, onPress, selected}) => {
  const onPressRadio = () => {
    if (selected) {
      onPress({});
    } else {
      onPress(value);
    }
  };

  return (
    <TouchableOpacity onPress={onPressRadio} style={styles.container}>
      <View style={styles.radio}>
        {selected && <View style={styles.selectedRadio} />}
      </View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.object,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
};

export default RadioButton;
