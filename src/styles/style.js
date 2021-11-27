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
        height: '45%',
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
    
});

export default styles;