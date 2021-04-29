import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Image from 'react-native-fast-image';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import styles from './PokemonCardHorizontal.style';
import {toTitleCase} from '../../utils/helper';

const PokemonCardHorizontal = ({item, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image
      source={{
        uri: get(item, 'sprites.other.official-artwork.front_default', ''),
      }}
      style={styles.image}
      resizeMode="contain"
    />
    <View style={styles.containerDescription}>
      <Text>{toTitleCase(item.name)}</Text>
      <Text>
        {item.types.length === 1
          ? `${toTitleCase(item.types[0].type.name)} Type`
          : `${item.types.length} Types`}
      </Text>
      <Text>Height {item.height / 10} m</Text>
      <Text>Weight {item.weight / 10} kg</Text>
    </View>
  </TouchableOpacity>
);

PokemonCardHorizontal.propTypes = {
  item: PropTypes.shape({
    types: PropTypes.array,
    height: PropTypes.number,
    weight: PropTypes.number,
  }),
  onPress: PropTypes.func,
};

export default PokemonCardHorizontal;
