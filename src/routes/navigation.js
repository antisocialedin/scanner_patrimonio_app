import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import Ionicons from 'react-native-vector-icons/Ionicons';

//------------------------import de telas----------------------------//

//Login de Servidores
import Login from '../screens/login/login';

//Home 
import Home from '../screens/home';
import Adm_Home from '../screens/adm_home';

//Area
import Cadastro_Area from '../screens/area/cadastro';
import ListArea from '../screens/area/flat_list';

//Patrimonio
import Cadastro_Patrimonio from '../screens/patrimonio/cadastro';
import ListPatrimonio from '../screens/patrimonio/flat_list';

//Servidor
import Cadastro_Servidor from '../screens/servidor/cadastro';
import ListServidor from '../screens/servidor/flat_list';

//Scanner
import Scanner from '../screens/scanner/barcode_scanner';
import Verificacao from '../screens/scanner/verificacao';

//Eventos
import Cadastro_Eventos from '../screens/eventos/cadastro';
import ListEventos from '../screens/eventos/flat_list';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

 export default function Navigation() {
    return (

      <Stack.Navigator>
        <Stack.Screen name = "Login" component = {Login} />
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name = "Adm_Home" component = {Adm_Home} />
        <Stack.Screen name = "Cadastro de Áreas" component = {Cadastro_Area} />
        <Stack.Screen name = "Lista de Áreas" component = {ListArea} />
        <Stack.Screen name = "Cadastro de Patrimonios" component = {Cadastro_Patrimonio} />
        <Stack.Screen name = "Lista de Patrimonios" component = {ListPatrimonio} />
        <Stack.Screen name = "Cadastro de Servidores" component = {Cadastro_Servidor} />
        <Stack.Screen name = "Lista de Servidores" component = {ListServidor} />
        <Stack.Screen name = "Scanner" component = {Scanner} />
        <Stack.Screen name = "Verificacao" component = {Verificacao} />
        <Stack.Screen name = "Lista de Eventos" component = {ListEventos} />
      </Stack.Navigator>

      /* <Tab.Navigator
        screenOptions={({route}) => ({
        tabBarIcon: ( { focused, color, size }) => {
          let iconName;
          if(route.name === 'Login'){
            iconName = 'ios-person';
          } else if(route.name === 'Home'){
            iconName = 'ios-home';
          } else if(route.name === 'Cadastro de Áreas') {
            iconName = 'ios-pricetag';
          } else if(route.name === 'Lista de Áreas') {
            iconName = 'ios-pricetag';
          } else if(route.name === 'Cadastro de Patrimonios') {
            iconName = 'ios-list';
          } else if(route.name === 'Lista de Patrimonios') {
            iconName = 'ios-list';
          } else if(route.name === 'Cadastro de Servidores') {
            iconName = 'ios-person-add';
          } else if(route.name === 'Lista de Servidores') {
            iconName = 'ios-person-add';
          } else if(route.name === 'Scanner') {
            iconName = 'ios-camera';
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',

      })}

      >
        <Tab.Screen name = "Login" component = {Login} />
        <Tab.Screen name = "Home" component = {Home} />
        <Tab.Screen name = "Cadastro de Áreas" component = {Cadastro_Area} />
        <Tab.Screen name = "Lista de Áreas" component = {ListArea} />
        <Tab.Screen name = "Cadastro de Patrimonios" component = {Cadastro_Patrimonio} />
        <Tab.Screen name = "Lista de Patrimonios" component = {ListPatrimonio} /> 
        <Tab.Screen name = "Cadastro de Servidores" component = {Cadastro_Servidor} />
        <Tab.Screen name = "Lista de Servidores" component = {ListServidor} /> 
        <Tab.Screen name = "Scanner" component = {Scanner} />
        <Tab.Screen name = "Verificacao" component = {Verificacao} />

      </Tab.Navigator> */

    );
  } 