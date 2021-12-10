import React, { useState, useEffect} from 'react';
import {FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from '../../styles/style';
import { FontAwesome } from "@expo/vector-icons";

export default function flatList({navigation}) {
  
  const [listaArea, setListaArea] = useState([]);
  const [listAreaId, setlistAreaId] = useState(null);


  useEffect(()=>{
    Listar();
  }, []);

  async function Listar() {
    console.log("Lista de Area");
    console.log(listAreaId);
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
      console.log(setlistAreaId);
      setListaArea(json);
    } catch (error) {console.log("Erro");}
  }
  
  async function getId( id ){ 
    setlistAreaId(id); 
    navigation.navigate('Lista de Patrimonios', {listAreaId});
  }
/*   handleSelection = (id) => {
    var selectedId = this.state.selectedId
 
    if (selectedId === id){
       this.setState({
          selectedItem: null
       })
    }
    else{
       this.setState({
          selectedItem: id
       }) 
       setAreaId(this.state.selectedId);
       navigation.navigate('Lista de Patrimonios', {areaId});
    }
  } */

  return (  
        <View style = {styles.container}>
          
          <FlatList
            data = {listaArea}
            keyExtractor = {(item) => item.id.toString()}
            extraData={ listAreaId }
            renderItem = {({item}) =>
              <TouchableOpacity
                //style={styles.areaButton}
                onPress = {() => getId(item.id)}
                //onPress = {() => setSelectedId(item.id)}
              >
                <View style = {styles.lista}>
                    <Text style = {styles.textoLista}>{item.nome}</Text>
                </View>
              </TouchableOpacity>
            }
          >
          </FlatList>

          {/* <TouchableOpacity  
            style = {styles.LoginButton}          
            onPress = {() => {Listar();}}
          >
            <Text style = {styles.textButton}>Listar</Text>
          </TouchableOpacity> */}

          <TouchableOpacity  
            style = {styles.LoginButton}          
            onPress = {() => navigation.navigate('Cadastro de Áreas')}
          >
            <Text style = {styles.textButton}>Adicionar Novo</Text>
          </TouchableOpacity>

        </View>
    )
  };