import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  RefreshControl,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {get, isEmpty} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

import styles from './DetailListPokemon.style';
import Search from '../../components/Search/Search.component';
import ModalFilter from '../../components/Modal/Modal.component';
import PokemonCardHorizontal from '../../components/PokemonCardHorizontal/PokemonCardHorizontal.component';
import RadioButton from '../../components/RadioButton/RadioButton.component';
import color from '../../utils/color';
import {keyExtractor, toTitleCase} from '../../utils/helper';

const DetailListPokemon = ({
  route,
  getDetailListPokemon,
  data,
  offset,
  requestPagingDetailList,
  getListFilter,
  listFilter,
}) => {
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [loadingPaging, setLoadingPaging] = useState(false);
  const [type, setType] = useState(route.params?.type || {});
  const [showModalFilter, setShowModalFilter] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    getListFilter();
    request();
  }, [request, getListFilter]);

  const request = useCallback(
    async isPullToRefresh => {
      if (!isPullToRefresh) {
        setLoading(true);
      } else {
        setRefresh(true);
      }

      try {
        await getDetailListPokemon(type?.name);
      } finally {
        if (!isPullToRefresh) {
          setLoading(false);
        } else {
          setRefresh(false);
        }
      }
    },
    [getDetailListPokemon, type?.name],
  );
  const onEndReached = async () => {
    if (loadingPaging || !isEmpty(type)) {
      return false;
    }
    setLoadingPaging(true);

    try {
      await requestPagingDetailList(offset);
    } finally {
      setLoadingPaging(false);
    }
  };
  const onPressItem = params => () => {
    navigation.navigate('DetailPokemon', params);
  };
  const onPressFilter = () => {
    setShowModalFilter(!showModalFilter);
  };
  const setShowModal = status => {
    setShowModalFilter(status);
    request();
  };

  const ListHeaderComponent = () => (
    <View style={styles.containerHeader}>
      <Search />
      <TouchableOpacity style={styles.filterButton} onPress={onPressFilter}>
        <Icon name="filter" size={24} color={color.White} />
      </TouchableOpacity>
    </View>
  );
  const ItemSeparatorComponent = () => {
    return <View style={styles.seperator} />;
  };
  const ListEmptyComponent = () => {
    return (
      <View>
        <Text>Pokemon tidak ditemukan</Text>
      </View>
    );
  };
  const ListFooterComponent = () => {
    if (loadingPaging) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color={color.Gray} />
        </View>
      );
    }
    return <View />;
  };
  const renderItem = ({item}) => {
    return (
      <PokemonCardHorizontal
        item={item}
        onPress={onPressItem({
          id: item.id,
          speciesName: get(item, 'species.name', ''),
        })}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ListHeaderComponent />
      {loading ? (
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color={color.Gray} />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => {
                request(true);
              }}
            />
          }
          onEndReachedThreshold={0.2}
          onEndReached={onEndReached}
          ListFooterComponent={ListFooterComponent}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListEmptyComponent={ListEmptyComponent}
          contentContainerStyle={styles.contentContainer}
        />
      )}
      <ModalFilter show={showModalFilter} setShow={setShowModal} title="Apply">
        <ScrollView contentContainerStyle={styles.contentModal}>
          {listFilter.map((filter, index) => (
            <RadioButton
              name={toTitleCase(filter.name)}
              value={filter}
              onPress={setType}
              selected={filter.name === type.name}
              key={index}
            />
          ))}
        </ScrollView>
      </ModalFilter>
    </View>
  );
};

DetailListPokemon.propTypes = {
  data: PropTypes.array,
  offset: PropTypes.number,
  listFilter: PropTypes.array,
  getDetailListPokemon: PropTypes.func,
  requestPagingDetailList: PropTypes.func,
  getListFilter: PropTypes.func,
};

export default DetailListPokemon;
