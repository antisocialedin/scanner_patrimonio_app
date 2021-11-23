
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View } from 'react-native';
import Navigation from './src/routes/navigation';
//import Header from './src/components/header'
import styles from './src/styles/style';
//import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
        <Navigation/>
    </NavigationContainer>
  );
} 


