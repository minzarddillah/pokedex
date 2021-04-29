import React, {useEffect, useState} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import styles from './TypeList.style';
import TypePokemon from '../TypePokemon/TypePokemon.component';
import TitleList from '../TitleList/TitleList.component';
import color from '../../utils/color';

const TypeList = ({data, loading}) => {
  const [types, setTypes] = useState([], []);
  useEffect(() => {
    if (data.length >= 1) {
      let tmp = [[], []];

      for (let i = 0; i < data.length; i++) {
        if (i % 2 === 0) {
          tmp[0].push(data[i]);
        } else {
          tmp[1].push(data[i]);
        }
      }
      setTypes(tmp);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <TitleList title="Tipe Pokemon" disabled={true} />
      {loading ? (
        <ActivityIndicator
          size="large"
          style={styles.loading}
          color={color.Gray}
        />
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}>
          <View>
            {types.map((innerTypes, index) => (
              <View key={index} style={styles.containerTypeList}>
                {innerTypes.map((type, indexType) => (
                  <TypePokemon data={type} key={indexType} />
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

TypeList.defaultProps = {
  typesPokemon: [],
  loading: false,
};

TypeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

export default TypeList;
