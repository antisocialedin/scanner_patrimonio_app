import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../styles/style';

export default function Header() {
    return (
        <View style = {styles.header}>
            <Text style = {styles.textTitle}> Teste </Text>
            {/* <Image
                source={require('../assets/voltar.png')}
                style={{width: 30, height:30}}
                resizeMode='contain'
            /> 
            <Image
                source={require('../assets/logo.png')}
                style={{width: 100, height:40}}
                resizeMode='contain'
            />
            <Image
                source={require('../assets/home.png')}
                style={{width: 30, height:30}}
                resizeMode='contain'
            /> */}
        </View>
    );
}