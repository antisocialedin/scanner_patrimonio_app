import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({

    /* header: {
        brackgroundColor:'#2e8b57',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,     
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 2,
    }, */

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',     //Cor
        justifyContent: 'center',
    },

    homeContainer: {
        width: '100%',
        height: '85%',
        //padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        //backgroundColor: '#000000',     //Cor
    },

    boxTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: 10,
    },

    boxButton: {
        borderRadius: 30,
        //alignItems: 'center',
        //justifyContent: 'center',
        width: '45%',
        height: '28%',
        padding: 5,
        backgroundColor:'#696969',
        //paddingTop:14,
        //paddingBottom:14,
        marginLeft:15,
        //marginRight:5,
        marginTop:5,
    },

    LoginButton: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width:"90%",
        backgroundColor:'#2e8b57',
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:10,
    },

    textButton: {
        fontSize:20,
        color:'#ffffff',
        fontWeight: 'bold',
    },

    homeButton: {
        flex: 1,
        //backgorundColor:'#696969',
        alignItems: 'center',
        justifyContent: 'center',
    },

    form: {
        width:'100%',               //largura
        height:'auto',              //altura
        marginTop:10,
        padding:10,
    },

    formContext: {
        width:'80%',                //largura
        height:'auto',              //altura
        //bottom:0,
        backgroundColor:'#696969',  //cor de fundo
        alignItems:'center',        //alinhamento dos itens
        //marginTop:20,             //altura da margem TOP
        borderRadius:30,            //angulo das bordas
    },

    formLabel: {
        color: '#ffffff',
        fontSize:18,
        fontWeight: 'bold',
        paddingLeft:20,
    },

    input: {
        width:'90%',
        borderRadius:50,
        backgroundColor:'#e3dede',
        height:40,
        margin:12,
        paddingLeft:10,
    },

    textTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        paddingLeft:10,
    },

    listContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 30
    },

    containerCam: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center', 
    },
    
    camera: {
        width:  400,
        height: 400,
        //width:  "75%",
        //height: "20%",
        //borderRadius: 30,
    },

    cameraButton: {
        //position: "absolute",
        //top: 30,
        //left: 50,
        margin: 20,
    },

    contentButton: {
        //flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center",
        alignItems: "flex-end",
        margin: 20,
        backgroundColor:'#2e8b57',
        borderRadius: 30, 
        marginLeft:15,
        marginRight:5,
        marginTop:5,
    },
    
    barcodeBox: {
        backgroundColor: 'fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato',
    },

    maintext: {
        fontSize: 16,
        margin: 20,
    },

    centeredView: {
        flex: 1,
        alignItems: "center",
        marginTop: 30
    },

    lista: {
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        //width:'80%',                //largura
        height:'auto',              //altura
        //bottom:0,
        backgroundColor:'#696969',  //cor de fundo
        alignItems:'center',        //alinhamento dos itens
        //marginTop:20,             //altura da margem TOP
        borderRadius:30,            //angulo das bordas
    },

    textoLista: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
    },

    texto2Lista: {
        color: "gray",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft:5,
    },

    formContainer: {
        flexDirection: "row",
        marginBottom: 20,
        alignItems: "center",
    },

    checkbox: {
        //margin: 8,
        alignItems: "center",
    },

    label: {
        color: '#ffffff',
        fontSize:16,
    },

    areaButton: {
        backgroundColor: '#696969',
        margin: 20,
    },

    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
});

export default styles;