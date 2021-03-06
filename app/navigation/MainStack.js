import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/Home.container';
import DetailPokemon from '../screens/DetailPokemon/DetailPokemon.container';
import DetailListPokemon from '../screens/DetailListPokemon/DetailListPokemon.container';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPokemon"
        component={DetailPokemon}
        options={{title: 'Detail Pokemon'}}
      />
      <Stack.Screen
        name="DetailListPokemon"
        component={DetailListPokemon}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
