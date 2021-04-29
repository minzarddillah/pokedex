import React from 'react';
import {Text, TouchableOpacity, View, Platform} from 'react-native';
import Image from 'react-native-fast-image';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

import styles from './PokemonCard.styles';
import {toTitleCase} from '../../utils/helper';

const PokemonCard = ({data}) => {
  const navigation = useNavigation();

  const onPressCard = () => {
    navigation.navigate('DetailPokemon', {
      id: data.id,
      speciesName: get(data, 'species.name', ''),
    });
  };

  return (
    <TouchableOpacity
      style={[styles.container, Platform.OS === 'android' ? styles.shadow : {}]}
      onPress={onPressCard}>
      <Image
        resizeMode="contain"
        source={{
          uri: get(data, 'sprites.other.official-artwork.front_default', ''),
        }}
        style={styles.image}
      />
      <View style={styles.containerContent}>
        <View style={styles.containerInformation}>
          <Text numberOfLines={1} style={styles.name}>
            {toTitleCase(data.name)}
          </Text>
          <Text style={styles.type}>
            {data.types.length === 1
              ? `${toTitleCase(data.types[0].type.name)} Type`
              : `${data.types.length} Types`}
          </Text>
        </View>
        <View style={styles.containerInformation}>
          <View>
            <Text style={styles.titleInformation}>Height</Text>
            <Text style={styles.valueInformation}>{data.height / 10} m</Text>
          </View>
          <View>
            <Text style={styles.titleInformation}>Weight</Text>
            <Text style={styles.valueInformation}>{data.weight / 10} kg</Text>
          </View>
        </View>

        <View style={styles.containerInformation}>
          {data.stats.slice(0, 3).map(({stat, base_stat}, index) => (
            <View key={index}>
              <Text style={styles.titleInformation}>{stat.name}</Text>
              <Text style={styles.valueInformation}>{base_stat}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

PokemonCard.defaultProps = {
  data: {
    name: '',
    types: [],
    height: 0,
    weight: 0,
    stats: [],
  },
};

PokemonCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    types: PropTypes.array,
    height: PropTypes.number,
    weight: PropTypes.number,
    stats: PropTypes.array,
  }),
};

export default PokemonCard;
