import React from 'react';
import { View, ScrollView, Text, TouchableOpacity} from 'react-native'
import styles from '../styles/style';
import { FontAwesome } from "@expo/vector-icons";

export default function Home ({navigation }) {
    return (
      <View style={styles.homeContainer}>

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress = {() => navigation.navigate('Scanner')}
            //onPress = {() => navigation.navigate('Verificacao')}
          >
            <FontAwesome name="barcode" size={30} color="white"></FontAwesome>
            <Text style={styles.textButton}>Scanner</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress = {() => navigation.navigate('Perfil do Servidor')}
          >
            <FontAwesome name="user" size={30} color="white"></FontAwesome>
            <Text style={styles.textButton}>Perfil</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress = {() => navigation.navigate('Lista de Eventos')}
          >
            <FontAwesome name="calendar" size={30} color="white"></FontAwesome>
            <Text style={styles.textButton}>Eventos</Text> 
          </TouchableOpacity>
        </View> 

        {/* <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress = {() => navigation.navigate('Lista de Patrimonios')}
          >
            <FontAwesome name="fire-extinguisher" size={30} color="white"></FontAwesome>
            <Text style={styles.textButton}>Patrimônio</Text> 
          </TouchableOpacity>
        </View> */}

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress = {() => navigation.navigate('Lista de Áreas')}
          >
            <FontAwesome name="map" size={30} color="white"></FontAwesome>
            <Text style={styles.textButton}>Área</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress = {() => navigation.navigate('Cadastro de Servidores')}
          >
            <FontAwesome name="user-plus" size={30} color="white"></FontAwesome>
            <Text style={styles.textButton}>Cadastro Servidor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity
            style={styles.homeButton}
            onPress = {() => navigation.navigate('Lista de Servidores')}
          >
            <FontAwesome name="users" size={30} color="white"></FontAwesome>
            <Text style={styles.textButton}>Servidor</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
}

