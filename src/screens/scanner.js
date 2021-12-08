import React, {useState, useEffect, useRef} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";
import styles from '../styles/style';

export default function Scanner ({navigation }) {

    const camRef = useRef(null)
    const [type,setType] = useState(Camera.Constants.Type.back)
    const [hasPermission, setHasPermission] = useState(null)
    const [foto,setFoto]=useState(null)

    useEffect(()=>{
        (async ()=> {
            const{status} = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === "granted");
            }) ();
    }, [])

        if(hasPermission === null){
            return<View/>
        }

        if(hasPermission === false){
            return <Text>Acesso Negado!</Text>
        }

        async function takePicture(){
            if(camRef){
                const data = await camRef.current.takePictureAsync();
                setFoto(data.uri);
            }
        }
        
    return (
        <SafeAreaView style ={styles.containerCam}>
            <Camera 
                style={styles.camera}
                type={type}
            ></Camera>
            <View style={styles.contentButton}>
                <TouchableOpacity 
                    style={styles.cameraButton}
                    onPress={takePicture}
                > 
                    <FontAwesome name="camera" size={23} color="white"></FontAwesome>               
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        
    );
}
// 8/10 slide 05


    
