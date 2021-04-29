import React from 'react';
import {View, Text} from 'react-native';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import styles from './Stat.style';
import {toTitleCase} from '../../utils/helper';

const Stat = ({data}) => {
  let name = '';
  const backgroundColorStat = data.base_stat >= 50 ? 'green' : 'red';
  const maxTotalStats = 1800;
  const maxSingleStats = 300;

  switch (get(data, 'stat.name', '')) {
    case 'hp':
      name = 'HP';
      break;
    case 'special-attack':
      name = 'Sp. Atk';
      break;
    case 'special-defense':
      name = 'Sp. Def';
      break;
    default:
      name = toTitleCase(get(data, 'stat.name', ''));
      break;
  }
  return (
    <View style={styles.containerStats}>
      <Text style={styles.labelStat}>{name}</Text>
      <Text style={styles.baseStat}>{data.base_stat}</Text>
      <View style={styles.containerProgress}>
        <View
          style={[
            {
              width: `${
                get(data, 'stat.name', '') === 'total'
                  ? (data.base_stat / maxTotalStats) * 100
                  : (data.base_stat / maxSingleStats) * 100
              }%`,
              backgroundColor: backgroundColorStat,
            },
            styles.progress,
          ]}
        />
      </View>
    </View>
  );
};

Stat.propTypes = {
  base_stat: PropTypes.number,
  stat: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default Stat;
