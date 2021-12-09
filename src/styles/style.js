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
        color: '#FF0043',
        fontSize: 24,
        fontWeight: 'bold',
    },

    listContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 30
    },
      
    cardView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '94%',
        minHeight: 200
    },

    promotionImage: {
        width: '50%'
    },

    descriptionText: {
        flex: 1
    },

    titleText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        margin: 5
    },

    promotionsList: {
        minHeight: '90%',
        maxHeight: '90%',
        backgroundColor: '#ffffff'
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
        justifyContent: "center",
        alignItems: "flex-end",
        margin: 20,
        backgroundColor:'#2e8b57',
        borderRadius: 30, 
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

    cardView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '94%',
        minHeight: 200
    },

    promotionImage: {
        width: '50%'
    },

    descriptionText: {
        flex: 1
    },

    titleText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
        margin: 5
    },

    priceText: {
        color: "#e73931",
        fontWeight: "bold",
        fontSize: 16,
        margin: 5
    },

    linkButton: {
        backgroundColor: "#2196F3",
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        margin: 5
    },

    textLinkButton: {
        color: "#FFFFFF",
        textAlign: 'center'
    },

    promotionsList: {
        minHeight: '90%',
        maxHeight: '90%',
        backgroundColor: '#ffffff'
    }, 

    lista: {
        backgroundColor: "orange",
        height: 80,
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
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
    }
});

export default styles;