import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import de telas
import Login from '../screens/login';
import Home from '../screens/home';
import Scanner from '../screens/scanner';
import Lista from '../screens/lista';
import Evento from '../screens/evento';
import Mensagens from '../screens/mensagens';

const Stack = createNativeStackNavigator();

 export default function Navigation() {
    return (

        <Stack.Navigator>

          <Stack.Screen name = "Login" component = {Login} />
          <Stack.Screen name = "Home" component = {Home} />
          <Stack.Screen name = "Scanner" component = {Scanner} />
          <Stack.Screen name = "Lista de Patrimonios" component = {Lista} />
          <Stack.Screen name = "Evento" component = {Evento} />
          <Stack.Screen name = "Mensagens" component = {Mensagens} />

        </Stack.Navigator>
    );
  } 