import React, {useState, useEffect, useRef} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Button, CheckBox, Picker} from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import styles from '../../styles/style';

export default function Verificacao ({navigation, route }) {

    //variaveis para armazenar os dados de entrada
    const {codigo} = route.params;
    const [nome, setNome] = useState(null);
    const [estado, setEstado] = useState(null);
    const [areaId, setAreaId] = useState(null);
    const [mensagem, setMensagem] = useState(null);
    //const [espera, setEspera] = useState(false);

/*     useEffect(()=>{
        ConsultaPatrimonio();
    }, []); */

    async function criaListaPatrimonio(){
        if( estado == null ){
          //apresentar mensagem dizendo q falta dados
          setMensagem("Existem Campos Vazio");
        }
        else{
            setMensagem(null);                    
            let response = await fetch('http://192.168.15.11:3000/criaListaPatrimonio', {
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

    async function ConsultaPatrimonio(){
        let response = await fetch('http://192.168.0.106:3000/consultaPatrimonio',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({                
                codigo: codigo                                
            })            
        });
        let json = await response.json();
        console.log(response);
        setAreaId(json.areaId);
        setCodigo(json.codigo);
        setNome(json.nome);
        //setEspera(true);      
    }; 

    return (
        <View style={styles.container}>
            <View style={styles.boxTitle}>
                <View style = {styles.formContext}>
                    {/* <Text style={styles.formLabel}> Patrimônio </Text> */}
                        <View style={styles.form}>

                            {/* <View style={styles.formContainer}>
                                <Text style={styles.formLabel}>Área:</Text>
                                <Text style={styles.textTitle}>{areaId}</Text> 
                            </View> */}

                            <View style={styles.formContainer}>
                                <Text style = {styles.formLabel}>Código:</Text>
                                <Text style={styles.textTitle}>{codigo}</Text>
                            </View>

                            <View style={styles.formContainer}>
                                <Text style={styles.formLabel}>Descrição:</Text>
                                <Text style={styles.textTitle}>{nome}</Text>
                            </View>

                            {/* <Text style={styles.formLabel}>Estado:</Text>  */}
                            
                            <View style={styles.formContainer}>
                                <Text style={styles.formLabel}>Quebrado:</Text>
                                <CheckBox
                                    style = {styles.checkbox}
                                    //value={estado}
                                    //onValueChange={setEstado}
                                >
                                </CheckBox>
                                {/* <Picker
                                    //selectedValue={selectedValue}
                                    //style={{ height: 50, width: 150 }}
                                    style={styles.textTitle}
                                    //onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item 
                                        label="Quebrado" 
                                        value="estado" />
                                    <Picker.Item 
                                        label="Bom" 
                                        value="estado" />
                                </Picker> */}
                            </View>

                            {/* <TouchableOpacity  
                                style = {styles.LoginButton}          
                                onPress = {() => {ConsultaPatrimonio();}}
                            >
                                <Text style = {styles.textButton}>Consultar</Text>
                            </TouchableOpacity> */}

                            <TouchableOpacity
                                style = {styles.LoginButton}
                                onPress = {() => { 
                                    criaListaPatrimonio(); 
                                }}
                            >
                                <Text style = {styles.textButton}>Adicionar</Text>
                            </TouchableOpacity> 
                            
                            <TouchableOpacity
                                style = {styles.LoginButton}
                                onPress = {() => navigation.navigate('Scanner')}                           
                            >
                                <Text style = {styles.textButton}>Voltar</Text>
                            </TouchableOpacity>   
                                                
                        </View>                       
                </View>     
           </View>
       </View>
    );
}
