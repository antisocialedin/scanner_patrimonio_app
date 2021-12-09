import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/style';

export default function Cadastro ({navigation }) {

    //variaveis para armazenar os dados de entrada
    const [prontuario, setProntuario] = useState(null);
    const [nome, setNome] = useState(null);
    const [mensagem, setMensagem] = useState(null);
    

    async function limparCampos() {
        setProntuario(null);
        setNome(null);
    } 

    async function gravaServidor(){
        if(prontuario == null || nome == null ){
          //apresentar mensagem dizendo q falta dados
          setMensagem("Existem Campos Vazio");
        }
        else{
            setMensagem(null);                    
            let response = await fetch('http://192.168.15.11:3000/gravaServidor', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                //nao passei ID
                body: JSON.stringify({                         
                    prontuario: prontuario,
                    nome: nome,
                    senha: prontuario,                  
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

                        <Text style = {styles.formLabel}>Prontuário:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setProntuario}
                            value={prontuario}
                            placeholder="Ex: BI3000777"
                        ></TextInput>

                        <Text style={styles.formLabel}>Nome Completo:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setNome}
                            value={nome}
                            placeholder="Ex: Fabricio de Souza"
                        ></TextInput>

    
                        <TouchableOpacity
                            style = {styles.LoginButton}
                            onPress = {() => { 
                                gravaServidor(); 
                            }}
                        >
                            <Text style = {styles.textButton} >Adicionar Servidor</Text>
                        </TouchableOpacity> 
                           
                        <TouchableOpacity
                            style = {styles.LoginButton}
                            onPress = {() => { 
                                limparCampos(); 
                            }}                            
                        >
                            <Text style = {styles.textButton} >Limpar os Campos</Text>
                        </TouchableOpacity>   
                                            
                    </View>                        
                </View>     
           </View>
       </View>
    );
}