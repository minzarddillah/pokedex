import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import store from './app/utils/store';
import MainStack from './app/navigation/MainStack';

function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({safeAreaView: {flex: 1}});

export default App;
