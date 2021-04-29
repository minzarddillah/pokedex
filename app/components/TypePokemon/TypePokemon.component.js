import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

import styles from './TypePokemon.style';
import {toTitleCase} from '../../utils/helper';

const TypePokemon = ({data}) => {
  const navigation = useNavigation();

  const onPressType = () => {
    navigation.navigate('DetailListPokemon', {
      type: data,
    });
  };

  return (
    <TouchableOpacity style={styles.containerType} onPress={onPressType}>
      <Text style={{color: '#474747'}}>{toTitleCase(data.name)}</Text>
    </TouchableOpacity>
  );
};

TypePokemon.defaultProps = {
  data: {
    name: '',
    url: '',
  },
};

TypePokemon.propTypes = {
  data: PropTypes.object,
};

export default TypePokemon;
