import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import styles from './DetailPokemon.style';
import {toTitleCase, keyExtractor} from '../../utils/helper';

import PokemonCardDetail from '../../components/PokemonCardDetail/PokemonCardDetail.component';
import TabView from '../../components/TabView/TabView.component';
import Stat from '../../components/Stat/Stat.component';
import Modal from '../../components/Modal/Modal.component';
import PokemonCardHorizontal from '../../components/PokemonCardHorizontal/PokemonCardHorizontal.component';
import color from '../../utils/color';

const DetailPokemon = ({
  data,
  pokedex,
  offset,
  loadingPagingPokedex,
  requestDetailPokemon,
  requestListCompare,
  requestPagingListCompare,
  requestComparePokemon,
  route,
}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'about', title: 'About'},
    {key: 'stats', title: 'Stats'},
  ]);
  const [showModal, setShowModal] = useState(false);
  const {id, speciesName} = route?.params || {};

  useEffect(() => {
    requestDetailPokemon({id, speciesName});
    requestListCompare();
  }, [id, requestDetailPokemon, speciesName, requestListCompare]);

  const onPressCompare = () => {
    setShowModal(true);
  };

  const onEndReached = () => {
    if (loadingPagingPokedex) {
      return false;
    }
    requestPagingListCompare(offset);
  };

  const comparePokemon = item => () => {
    requestComparePokemon({
      id: item.id,
      speciesName: get(item, 'species.name', ''),
    });
    setShowModal(false);
  };

  const battle = () => {
    let winner = -1;
    let hp = [
      data[0].stats.find(v => v.stat.name === 'hp')?.base_stat,
      data[1].stats.find(v => v.stat.name === 'hp')?.base_stat,
    ];

    while (hp[0] > 0 || hp[1] > 0) {
      const damageFirstPokemon =
        (data[0].stats.find(v => v.stat.name === 'attack')?.base_stat * 2 -
          data[1].stats.find(v => v.stat.name === 'defense')?.base_stat) /
        3;
      const damageSecondPokemon =
        (data[1].stats.find(v => v.stat.name === 'attack')?.base_stat * 2 -
          data[0].stats.find(v => v.stat.name === 'defense')?.base_stat) /
        3;

      hp[1] = hp[1] - damageFirstPokemon;
      if (hp[1] <= 0) {
        winner = 0;
        break;
      }

      hp[0] = hp[0] - damageSecondPokemon;
      if (hp[0] <= 0) {
        winner = 1;
        break;
      }
    }

    Alert.alert('BATTLE', `The winner is ${data[winner]?.name}`);
  };

  const renderScene = ({routeTab}) => {
    switch (routeTab.key) {
      case 'about':
        return (
          <View style={styles.containerTabScene}>
            <View style={styles.containerAbout}>
              <Text style={[styles.labelAbout]}>Name</Text>
              {data.map((pokemon, indexPokemon) => (
                <Text
                  style={[styles.valueAbout, styles.titleAbout]}
                  key={indexPokemon}>
                  {toTitleCase(pokemon.name)}
                </Text>
              ))}
            </View>
            <View style={styles.containerAbout}>
              <Text style={styles.labelAbout}>Height</Text>
              {data.map((pokemon, indexPokemon) => (
                <Text style={styles.valueAbout} key={indexPokemon}>
                  {pokemon.height / 10} m
                </Text>
              ))}
            </View>
            <View style={styles.containerAbout}>
              <Text style={styles.labelAbout}>Weight</Text>
              {data.map((pokemon, indexPokemon) => (
                <Text style={styles.valueAbout} key={indexPokemon}>
                  {pokemon.weight / 10} kg
                </Text>
              ))}
            </View>
            <View style={styles.containerAbout}>
              <Text style={styles.labelAbout}>Abilities</Text>
              {data.map((pokemon, indexPokemon) => (
                <Text style={styles.valueAbout} key={indexPokemon}>
                  {pokemon.abilities.map(
                    ({ability}, indexAbility) =>
                      `${toTitleCase(ability.name)}${
                        pokemon.abilities.length - 1 === indexAbility
                          ? ''
                          : ', '
                      }`,
                  )}
                </Text>
              ))}
            </View>
            <View style={styles.containerAbout}>
              <Text style={styles.labelAbout}>Generation</Text>
              {data.map((pokemon, indexPokemon) => (
                <Text style={styles.valueAbout} key={indexPokemon}>
                  {toTitleCase(get(pokemon, 'generation.name', ''))}
                </Text>
              ))}
            </View>
            <View style={styles.containerAbout}>
              <Text style={styles.labelAbout}>Habitat</Text>
              {data.map((pokemon, indexPokemon) => (
                <Text style={styles.valueAbout} key={indexPokemon}>
                  {toTitleCase(get(pokemon, 'habitat.name', ''))}
                </Text>
              ))}
            </View>
            <View style={styles.containerAbout}>
              <Text style={styles.labelAbout}>Shape</Text>
              {data.map((pokemon, indexPokemon) => (
                <Text style={styles.valueAbout} key={indexPokemon}>
                  {toTitleCase(get(pokemon, 'shape.name'))}
                </Text>
              ))}
            </View>
            <View style={styles.containerAbout}>
              <Text style={styles.labelAbout}>Egg Groups</Text>
              {data.map((pokemon, indexPokemon) => (
                <Text style={styles.valueAbout} key={indexPokemon}>
                  {pokemon?.egg_groups?.map(
                    (egg, indexEgg) =>
                      `${toTitleCase(egg.name)}${
                        pokemon.egg_groups.length - 1 === indexEgg ? '' : ', '
                      }`,
                  )}
                </Text>
              ))}
            </View>
            <View style={styles.containerAbout}>
              <Text style={styles.labelAbout}>Rarity</Text>
              {data.map((pokemon, indexPokemon) => (
                <Text style={styles.valueAbout} key={indexPokemon}>
                  {pokemon.is_legendary || pokemon.is_mythical
                    ? 'True'
                    : 'None'}
                </Text>
              ))}
            </View>
          </View>
        );
      case 'stats':
        return (
          <View style={styles.containerTabScene}>
            {data.map((pokemon, indexPokemon) => {
              const totalStats = pokemon.stats.reduce((a, b) => {
                return a + b.base_stat;
              }, 0);

              return (
                <View style={styles.wrapperStats} key={indexPokemon}>
                  <Text style={styles.titleTabStats}>
                    {toTitleCase(pokemon.name)}
                  </Text>
                  {pokemon.stats.map((stat, indexStat) => (
                    <Stat data={stat} key={indexStat} />
                  ))}
                  <Stat data={{base_stat: totalStats, stat: {name: 'total'}}} />
                </View>
              );
            })}
          </View>
        );
    }
  };

  const renderListCompare = ({item}) => (
    <PokemonCardHorizontal item={item} onPress={comparePokemon(item)} />
  );

  const renderFooterListCompare = () => {
    if (loadingPagingPokedex) {
      return (
        <View>
          <ActivityIndicator size="large" color={color.Gray} />
        </View>
      );
    }
    return <View />;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.containerCard}>
          {data.map((pokemon, indexPokemon) => (
            <PokemonCardDetail data={pokemon} key={indexPokemon} />
          ))}
        </View>
        {data.length > 1 && (
          <TouchableOpacity style={styles.buttonBattle} onPress={battle}>
            <Text style={styles.textButtonBattle}>Battle</Text>
          </TouchableOpacity>
        )}
        <TabView
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </ScrollView>
      <TouchableOpacity onPress={onPressCompare} style={styles.buttonVS}>
        <Text style={styles.textButtonVS}>VS</Text>
      </TouchableOpacity>

      <Modal show={showModal} setShow={setShowModal} title="CANCEL">
        <FlatList
          data={pokedex.filter(poke => poke.id !== data[0]?.id)}
          renderItem={renderListCompare}
          keyExtractor={keyExtractor}
          style={styles.containerListCompare}
          contentContainerStyle={styles.contentContainerListPokedex}
          onEndReachedThreshold={0.2}
          onEndReached={onEndReached}
          ListFooterComponent={renderFooterListCompare}
        />
      </Modal>
    </View>
  );
};

DetailPokemon.propTypes = {
  data: PropTypes.array,
  pokedex: PropTypes.array,
  offset: PropTypes.number,
  loadingPagingPokedex: PropTypes.bool,
  requestDetailPokemon: PropTypes.func,
  requestListCompare: PropTypes.func,
  requestPagingListCompare: PropTypes.func,
  requestComparePokemon: PropTypes.func,
};

export default DetailPokemon;
