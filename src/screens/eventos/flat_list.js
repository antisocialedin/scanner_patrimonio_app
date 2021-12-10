import React, { useState, useEffect} from 'react';
import {FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from '../../styles/style';
import { FontAwesome } from "@expo/vector-icons";

export default function flatList ({navigation }) {

    const [listaEvento, setListaEvento] = useState([]);

    useEffect(()=>{
      Listar();
    }, []);
  
    async function Listar() {
      console.log("Lista de Evento");
      try {
        let response = await fetch('http://192.168.15.11:3000/listaEvento', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        });
        let json = await response.json();
        console.log(json);
        setListaEvento(json);
      } catch (error) {console.log("Erro");}
    }
    
    return (  
          <View style = {styles.container}>
            
            <FlatList
              data = {listaEvento}
              keyExtractor = {(item) => item.id.toString()}
              renderItem = {({item}) =>
                <View style = {styles.lista}>
                  <TouchableOpacity
                    style={styles.areaButton}
                    onPress = {() => navigation.navigate('Lista de Áreas')}
                  >
                    <Text style = {styles.textoLista}>{item.nome}</Text>
                  </TouchableOpacity>
                </View>
            }
            ></FlatList>
  
            {/* <TouchableOpacity  
              style = {styles.LoginButton}          
              onPress = {() => {Listar();}}
            >
              <Text style = {styles.textButton}>Listar</Text>
            </TouchableOpacity> */}
  
            <TouchableOpacity  
              style = {styles.LoginButton}          
              onPress = {() => navigation.navigate('Cadastro de Eventos')}
            >
              <Text style = {styles.textButton}>Adicionar Novo</Text>
            </TouchableOpacity>
  
          </View>
      )
    };