import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';

import Search from '../../components/Search/Search.component';
import Banner from '../../components/Banner/Banner.component';
import TypeList from '../../components/TypeList/TypeList.component';
import PokemonList from '../../components/PokemonList/PokemonList.component';
import dataBanner from '../../dummy/banner.json';
import styles from './Home.style';

const HomeScreen = ({
  requestListPokemon,
  requstTypePokemon,
  listOfPokemon,
  loadingListOfPokemon,
  typesPokemon,
  loadingTypesPokemon,
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    requestListPokemon();
    requstTypePokemon();
  }, [requestListPokemon, requstTypePokemon]);

  const onPressListPokemon = () => {
    navigation.navigate('DetailListPokemon');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerSearch}>
        <Search />
      </View>
      <Banner data={dataBanner} />
      <TypeList data={typesPokemon} loading={loadingTypesPokemon} />
      <PokemonList
        title="Daftar Pokemon"
        data={listOfPokemon}
        loading={loadingListOfPokemon}
        onPress={onPressListPokemon}
      />
    </ScrollView>
  );
};

HomeScreen.propTypes = {
  requestListPokemon: PropTypes.func,
  requstTypePokemon: PropTypes.func,
  listOfPokemon: PropTypes.array,
  loadingListOfPokemon: PropTypes.bool,
  typesPokemon: PropTypes.array,
  loadingTypesPokemon: PropTypes.bool,
};

export default HomeScreen;
