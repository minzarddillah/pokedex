import React from 'react';
import {View, Text} from 'react-native';
import Image from 'react-native-fast-image';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import styles from './PokemonCardDetail.style';
import {toTitleCase} from '../../utils/helper';

const PokemonCardDetail = ({data}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: get(data, 'sprites.other.official-artwork.front_default', ''),
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <View>
        <View style={styles.containerTypes}>
          <Text style={styles.id}>#{data.id}</Text>
          <Text style={styles.name}>{toTitleCase(data.name)}</Text>
        </View>
        <View style={styles.containerTypes}>
          {data.types.map(({type}, index) => (
            <Text key={index} style={styles.typeName}>
              {toTitleCase(type.name)}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

PokemonCardDetail.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.array,
  }),
};

export default PokemonCardDetail;
