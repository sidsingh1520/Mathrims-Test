

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home";
const Stack = createStackNavigator();
const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}} >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Test App',
          headerStyle: {
            backgroundColor: '#56CCF2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;