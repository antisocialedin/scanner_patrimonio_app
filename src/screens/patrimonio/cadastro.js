import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/style';

export default function Cadastro ({navigation }) {

    //variaveis para armazenar os dados de entrada
    const [codigo, setCodigo] = useState(null);
    const [nome, setNome] = useState(null);
    const [estado, setEstado] = useState(null);
    const [areaId, setAreaId] = useState(null);
    const [mensagem, setMensagem] = useState(null);
    

    async function limparCampos() {
        setCodigo(null);
        setNome(null);
        setEstado(null);
        setAreaId(null);
    } 

    async function gravaPatrimonio(){
        if( codigo == null || nome == null || areaId == null ){
          //apresentar mensagem dizendo q falta dados
          setMensagem("Existem Campos Vazio");
        }
        else{
            setMensagem(null);                    
            let response = await fetch('http://192.168.15.11:3000/gravaPatrimonio', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                //nao passei ID
                body: JSON.stringify({                         
                    codigo: codigo,
                    nome: nome,
                    estado: estado,
                    areaId: areaId,                 
                })
            });


            let json = await response.json();
            console.log(json);

            
            /* if(json === 'Inclusao: ok'){
                setMensagem("Servidor cadastrado com sucesso!");
                setProntuario(null);
                setNome(null);
            }
            else{
                setMensagem("Erro no cadastro do Servidor!");
            } */
        }       
    } 

    return (
        <View style={styles.container}>
            <View style={styles.boxTitle}>
                <View style = {styles.formContext}>
                    <View style={styles.form}>

                        <Text style = {styles.formLabel}>Código:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setCodigo}
                            value={codigo}
                            placeholder="3748593"
                        ></TextInput>

                        <Text style={styles.formLabel}>Descrição:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setNome}
                            value={nome}
                            placeholder="Cadeira"
                        ></TextInput>

                        <Text style={styles.formLabel}>Estado:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setEstado}
                            value={estado}
                            placeholder="Quebrado"
                        ></TextInput>
    
                        <Text style={styles.formLabel}>Área:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setAreaId}
                            value={areaId}
                            placeholder="C-183"
                        ></TextInput>

                        <TouchableOpacity
                            style = {styles.LoginButton}
                            onPress = {() => { 
                                gravaPatrimonio(); 
                            }}
                        >
                            <Text style = {styles.textButton} >Adicionar Patrimonio</Text>
                        </TouchableOpacity> 
                           
                        <TouchableOpacity
                            style = {styles.LoginButton}
                            onPress = {() => { 
                                limparCampos(); 
                            }}                            
                        >
                            <Text style = {styles.textButton} >Limpar</Text>
                        </TouchableOpacity>   
                                            
                    </View>                        
                </View>     
           </View>
       </View>
    );
}