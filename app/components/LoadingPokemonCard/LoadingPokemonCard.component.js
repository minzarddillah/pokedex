import React from 'react';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

import styles from './LoadingPokemonCard.style';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const LoadingPokemonCard = () => {
  return <ShimmerPlaceholder style={styles.container} />;
};

export default LoadingPokemonCard;
