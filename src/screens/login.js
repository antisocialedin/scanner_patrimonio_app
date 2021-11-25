import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles/style';
//import TextField from '@mui/material/TextField'

export default function Login ({navigation }) {
    //const[input, setInput] = useState('');
    //const[hidePass, setHidePass] = useState(true);
    
    return (
        <View style={styles.container}>
            <View style={styles.boxTitle}>
                <View style = {styles.formContext}>
                    <View style={styles.form}>
                        <Text style={styles.formLabel}>Prontuário:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex: BI3000777"
                        ></TextInput>

                        <Text style={styles.formLabel}>Senha:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder=""
                            //value={input}
                            //onChangeText={ (texto) => setInput(texto) }
                            //secureTextEntry={hidePass}
                            //type="password"
                        ></TextInput>

                        <TouchableOpacity
                            style={styles.LoginButton}
                            onPress = {() => navigation.navigate('Home')}
                        >
                            <Text style={styles.textButton}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

