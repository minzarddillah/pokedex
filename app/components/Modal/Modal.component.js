import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './Modal.style';

const Modal = ({show, setShow, title, children}) => {
  const onPressApply = () => setShow(false);

  if (!show) {
    return <View />;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {children}
        {title && (
          <TouchableOpacity onPress={onPressApply} style={styles.buttonApply}>
            <Text style={styles.textButtonApply}>{title}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  data: PropTypes.array,
  selected: PropTypes.shape({
    name: PropTypes.string,
  }),
  onChangeFilter: PropTypes.func,
};

export default Modal;
