import React, { useState, useEffect} from 'react';
import {FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from '../../styles/style';
import { FontAwesome } from "@expo/vector-icons";

export default function flatList ({navigation, route }) {

    const [listaPatrimonio, setListaPatrimonio] = useState([]);
    const [espera, setEspera] = useState(false);
    const {listAreaId} = route.params;

    useEffect(()=>{
      Listar();
    }, []);
  
    async function Listar() {
      console.log("Lista de Patrimonio");
      try {
        let response = await fetch('http://192.168.15.11:3000/listaPatrimonio', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        });
        let json = await response.json();
        console.log(json);
        setListaPatrimonio(json.filter(({areaId}) => areaId === listAreaId)); //.filter(({areaId}) => areaId === areaId)
      } catch (error) {console.log("Erro");}
      setEspera(true);
    }
    
    return (  
          <View style = {styles.container}>
            {espera &&
                <FlatList
                data = {listaPatrimonio}
                keyExtractor = {(item) => item.id.toString()}
                renderItem = {({item}) =>
                        <View style = {styles.lista}>
                        <TouchableOpacity
                            style={styles.areaButton}
                            onPress = {() => navigation.navigate('Scanner')}
                        >
                            <View style={styles.formContainer}>
                                <Text style = {styles.textoLista}>{item.nome}</Text>
                            </View>

                            <View style={styles.formContainer}>
                                <Text style = {styles.textoLista}>Código:</Text>
                                <Text style = {styles.textoLista}>{item.codigo}</Text>
                            </View>

                            
                            <View style={styles.formContainer}>
                                <Text style = {styles.textoLista}>Estado:</Text>
                                <Text style = {styles.textoLista}>{item.estado}</Text>
                            </View>

                        </TouchableOpacity>
                        </View>
                    }
                ></FlatList>
            }
            <TouchableOpacity  
              style = {styles.LoginButton}          
              onPress = {() => {}}
            >
              <Text style = {styles.textButton}>Finalizar Verificação</Text>
            </TouchableOpacity>
  
            <TouchableOpacity  
              style = {styles.LoginButton}          
              onPress = {() => navigation.navigate('Cadastro de Patrimonios')}
            >
              <Text style = {styles.textButton}>Adicionar Novo</Text>
            </TouchableOpacity>
  
          </View>
      )
    };