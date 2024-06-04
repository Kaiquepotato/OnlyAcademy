// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaPerfil from './TelaPerfil/TelaPerf';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Perfil">
        <Stack.Screen
          name="Perfil"
          component={TelaPerfil}
          options={{ headerShown: false }} // Remove o cabeçalho
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
