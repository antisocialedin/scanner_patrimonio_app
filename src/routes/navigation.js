import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import de telas
import Login from '../screens/login';
import Home from '../screens/home';
import Scanner from '../screens/barcode_scanner';
import Lista from '../screens/Patrimonios/lista';
import Evento from '../screens/evento';
import Mensagens from '../screens/mensagens';


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
            } else if(route.name === 'Scanner') {
              iconName = 'ios-camera';
            } else if(route.name === 'Patrimonios') {
              iconName = 'ios-list';
            } else if(route.name === 'Evento') {
              iconName = 'ios-pricetag';
            } else if(route.name === 'Mensagens') {
              iconName = 'ios-chatbubbles';
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',

        })}

        >
          
          <Tab.Screen name = "Login" component = {Login} />
          <Tab.Screen name = "Home" component = {Home} />
          <Tab.Screen name = "Scanner" component = {Scanner} />
          <Tab.Screen name = "Patrimonios" component = {Lista} />
          <Tab.Screen name = "Evento" component = {Evento} />
          <Tab.Screen name = "Mensagens" component = {Mensagens} />

        </Tab.Navigator>
    );
  } 