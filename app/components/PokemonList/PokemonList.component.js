import React from 'react';
import {ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './PokemonList.style';
import TitleList from '../TitleList/TitleList.component';
import PokemonCard from '../PokemonCard/PokemonCard.component';
import LoadingPokemonCard from '../LoadingPokemonCard/LoadingPokemonCard.component';

const PokemonList = ({title, data, loading, onPress}) => {
  return (
    <View style={styles.container}>
      <TitleList title={title} disabled={false} onPress={onPress} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        {loading ? (
          <>
            <LoadingPokemonCard />
            <LoadingPokemonCard />
            <LoadingPokemonCard />
          </>
        ) : (
          data.map((pokemon, index) => (
            <PokemonCard data={pokemon} key={index} />
          ))
        )}
      </ScrollView>
    </View>
  );
};

PokemonList.defaultProps = {
  title: '',
  data: [],
  loading: false,
  onPress: () => {},
};

PokemonList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
};

export default PokemonList;
