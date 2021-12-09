import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//------------------------import de telas----------------------------//

//Login de Servidores
import Login from '../screens/login';

//Home 
import Home from '../screens/home';

//Area
import Cadastro_Area from '../screens/area/cadastro';
import ListArea from '../screens/area/flat_list';

//Patrimonio
import Cadastro_Patrimonio from '../screens/patrimonio/cadastro';
//import ListPatrimonio from '../screens/patrimonio/flat_list';

//Servidor
import Cadastro_Servidor from '../screens/servidor/cadastro';
//import ListServidor from '../screens/servidor/flat_list';

//Scanner
import Scanner from '../screens/barcode_scanner';



const Tab = createBottomTabNavigator();

 export default function Navigation() {
    return (

        <Tab.Navigator
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
          {/* <Tab.Screen name = "Lista de Patrimonios" component = {ListPatrimonio} /> */}
          <Tab.Screen name = "Cadastro de Servidores" component = {Cadastro_Servidor} />
          {/* <Tab.Screen name = "Lista de Servidores" component = {ListServidor} /> */}
          <Tab.Screen name = "Scanner" component = {Scanner} />

        </Tab.Navigator>
    );
  } 