import React, {useState, useEffect, useRef} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Button } from 'react-native';
//import { Camera } from "expo-camera";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { FontAwesome } from "@expo/vector-icons";
import styles from '../../styles/style';

export default function Scanner ({navigation }) {

    //const camRef = useRef(null);
    //const [type,setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [codigo, setCodigo] = useState('Not yet scanned')

    askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == "granted")
        }) ()
    };

    // Request camera permission
    useEffect(()=>{
        askForCameraPermission();
    }, []);
    
    // What happens when we scan the bar code
    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        setCodigo(data);
        console.log('Type: ' + type + '\nData:' + data)
    };

    // Check permission and return the screens
    if(hasPermission === null){
        return(
            <View>
                <Text>Requesting for camera permission</Text>
            </View>
        );
    };

    if(hasPermission === false){
        return(
            <View>            
                <Text>Acesso Negado!</Text>
            {/* <TouchableOpacity
                    style={styles.LoginButton}
                    onPress={() => askForCameraPermission()}
                >
                    <Text style={styles.textButton}>Permitir Camera</Text>
                </TouchableOpacity> */}
                <Button title={'Permitir Camera'} onPress={() => askForCameraPermission()}/>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.containerCam}>
            <View style={styles.barcodeBox}> 
                <BarCodeScanner 
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={styles.camera}
                ></BarCodeScanner>
            </View>

            <Text style={styles.maintext}>{codigo}</Text>

            <View style={styles.contentButton}> 
                {scanned && 
                    <TouchableOpacity 
                        style={styles.cameraButton}
                        onPress={() => setScanned(false)}
                    > 
                        <FontAwesome name="barcode" size={23} color="white"></FontAwesome>               
                    </TouchableOpacity>
                }     
            </View>

            <View style={styles.contentButton}> 
                {scanned &&
                    <TouchableOpacity 
                    style={styles.cameraButton}
                    onPress={() => navigation.navigate('Verificacao', {codigo})}
                    >
                    <FontAwesome name="save" size={23} color="white"></FontAwesome>               
                    </TouchableOpacity>
                }
            </View>
            
        </SafeAreaView>
        
    );
}
// 8/10 slide 05


    
