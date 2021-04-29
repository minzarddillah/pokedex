import React from 'react';
import {Platform} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

import styles from './LoadingPokemonCard.style';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const LoadingPokemonCard = () => {
  return (
    <ShimmerPlaceholder
      style={[styles.container, Platform.OS === 'android' ? styles.shadow : {}]}
    />
  );
};

export default LoadingPokemonCard;
