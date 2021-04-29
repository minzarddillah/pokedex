import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/Home.container';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
