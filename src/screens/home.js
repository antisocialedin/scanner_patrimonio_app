import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native'
import styles from '../styles/style';

export default function Home ({navigation }) {
    return (
      <View style={styles.homeContainer}>

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress = {() => navigation.navigate('Scanner')}
          >
            <Text style={styles.textButton}>Scanner</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress = {() => navigation.navigate('Lista de Patrimonios')}
          >
            <Text style={styles.textButton}>Lista de Patrimonios</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress = {() => navigation.navigate('Evento')}
          >
            <Text style={styles.textButton}>Eventos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress = {() => navigation.navigate('Mensagens')}
          >
            <Text style={styles.textButton}>Mensagens</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress = {() => navigation.navigate('Cadastro de Servidores')}
          >
            <Text style={styles.textButton}>Cadastro Servidores</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress = {() => navigation.navigate('Cadastro de Patrimonios')}
          >
            <Text style={styles.textButton}>Cadastro Patrimonios</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
}

