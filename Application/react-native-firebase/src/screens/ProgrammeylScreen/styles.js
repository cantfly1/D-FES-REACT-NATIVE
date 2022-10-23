import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    ImageBackground: {
        flex: 1,
        zIndex: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    titre2: {
        width: '25%',
        textAlign: 'center',
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 16,
        top: '25%',
        paddingBottom: 10,
        
    },
    titre3: {
        width: '25%',
        paddingBottom: 10,
        textAlign: 'center',
        color: '#616161',
        fontWeight: 'bold',
        fontSize: 16,
        top: '25%',
        borderBottomWidth : 2,
        borderBottomColor : '#165425',
    },
    img1: {
        alignItems: 'center',
        justifyContent: 'center',
        top: '14%',
        width: 300,
        height: 600,
        left: '-2%',
      
    },
    container1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
        top:40,
        right: '3%',
        
        
    },
    container2: {
       
        alignContent  : 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
        
        paddingBottom: 5 ,
        overflow: 'hidden',
        top:'25%',
        alignItems: "center",

        
    },
});