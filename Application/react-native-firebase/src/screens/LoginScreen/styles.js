import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    titre: {
        width: '50%',
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
        marginBottom: 15,
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
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        width: '60%',
        borderBottomWidth : 1.0,
        borderBottomColor : '#707070',
        fontFamily: 'Roboto',
        fontSize: 20,
        marginTop: 0,
        marginBottom: 5,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 10
    },
    button: {
        padding : 10,
        borderColor: '#165425',
        borderWidth: 4,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 35,
        paddingRight: 35,
        marginTop: 25,
        height: 48,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: '#165425',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        textDecorationLine: 'underline',
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d',
        textDecorationLine: 'underline',
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
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
   
})