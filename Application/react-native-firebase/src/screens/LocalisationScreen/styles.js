import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: '#fff',
        
        
        alignItems: 'center',
    },
    container1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
        
    },
    input: { 
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    titre: {
        width: '70%',
        textAlign: 'center',
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 22,
      },

    second: {
        width: '85%',
        padding: 10,
        textAlign: 'center',
        color: '#616161',
        fontSize: 16,
        marginBottom: 35,
      },

    trois: {
        marginTop: 30,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    quatre: {
        textDecorationLine: 'underline',
    },
    logo: {
        marginBottom: 30,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      logo1: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      maps: {
        width:  300,
        height: 300,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      button: {
        padding : 10,
        borderColor: '#9ebe26',
        borderWidth: 4,
        marginLeft: 20,
        marginRight: 0,
        paddingLeft: 35,
        paddingRight: 35,
        marginTop: 20,
        height: 48,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center'
    },
    
    button1: {
        padding : 10,
        borderColor: '#165425',
        borderWidth: 4,
        marginLeft: 10,
        marginRight: 20,
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 20,
        height: 48,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        
        color: '#9ebe26',
        fontSize: 17,
        fontWeight: "bold"
    },
    buttonTitle1: {
        
        color: '#165425',
        fontSize: 17,
        fontWeight: "bold"
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
   

})