import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        {/* Tela inicial */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tela início',
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: '#fff',
          }}
        />

        {/* Tela de cadastro */}
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: 'Página Cadastro',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
