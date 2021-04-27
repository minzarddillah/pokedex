import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './Home.style';

function HomeScreen(props) {
  const {requestListPokemon} = props;

  useEffect(() => {
    requestListPokemon();
  }, [requestListPokemon]);

  return (
    <View style={styles.container}>
    </View>
  );
}

export default HomeScreen;
