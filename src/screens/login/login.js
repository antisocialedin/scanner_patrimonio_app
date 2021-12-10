import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../../styles/style';
//import TextField from '@mui/material/TextField'

export default function Login ({navigation }) {
    //const[input, setInput] = useState('');
    //const[hidePass, setHidePass] = useState(true);

    //variavel para armazenar o prontuario fixo do ADM
    const [prontuarioADM] = useState('BI3000966');

    //variavel para armazenar a resposta do banco
    const [prontuariobanco, setprontuariobanco] = useState(null);
    const [senhabanco, setsenhabanco] = useState(null);

    //variavel para receber os dados da tela
    const [prontuario, setprontuario] = useState(null);
    const [senha, setsenha] = useState(null);
    
    async function ValidarAcesso(){
        if(prontuario == null ){
            setMensagem("Ha campos vazios!");
        }
        else{
            let response = await fetch('http://192.168.15.11:3000/consultaServidor', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   //aqui vai a variavel prontuario para verificar se ela existe no banco
                   prontuario: prontuario
                })                
            });
            let json = await response.json();
            setprontuariobanco(json.prontuario);
            setsenhabanco(json.senha);   
            
            if(prontuarioADM == prontuario){
                if(senhabanco == senha){
                    //libera pra tela de adm
                    navigation.navigate('Adm_Home');
                } 
                else{
                    //senhas desiguais
                } 
            }
            else{
                if(prontuariobanco == prontuario){
                    if(senhabanco == senha){
                        //libera pra tela de servidor
                        navigation.navigate('Home');
                    } 
                    else{
                        //senhas desiguais
                    } 
                }
                else{
                    //prontuario não registrado
                }              
            } 
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxTitle}>
                <View style = {styles.formContext}>
                    <View style={styles.form}>
                        <Text style={styles.formLabel}>Prontuário:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex: BI3000777"
                            onChangeText = {setprontuario}
                            value = {prontuario}
                        ></TextInput>

                        <Text style={styles.formLabel}>Senha:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="*********"
                            onChangeText = {setsenha}
                            value = {senha}
                        ></TextInput>

                        <TouchableOpacity
                            style={styles.LoginButton}
                            onPress = {() => {ValidarAcesso();}}                           
                        >
                            <Text style={styles.textButton}>Entrar</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        </View>
    );
}

