import React, { useState } from 'react';
import {FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from '../../styles/style';

export default function flatList({navigation}) {
  
  const [listaArea, setListaArea] = useState([]);

  async function Listar() {
    console.log("Lista de Area");
    try {
      let response = await fetch('http://192.168.15.11:3000/listaArea', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
      let json = await response.json();
      console.log(json);
      setListaArea(json);
    } catch (error) {console.log("Erro");}
  }
  
  return (  
        <View style = {styles.container}>
          <View>
            <Text style = {styles.textTitle}>Áreas</Text>     
          </View>

          <FlatList
            data = {listaArea}
            keyExtractor = {(item) => item.id.toString()}
            renderItem = {({item}) =>
              <View style = {styles.lista}>
                <Text style = {styles.textoLista}>{item.nome}</Text>
              </View>
          }
          ></FlatList>

          <TouchableOpacity  
            style = {styles.LoginButton}          
            onPress = {() => {Listar();}}
          >
            <Text style = {styles.textButton}>Listar</Text>
          </TouchableOpacity>

        </View>
    )
  };