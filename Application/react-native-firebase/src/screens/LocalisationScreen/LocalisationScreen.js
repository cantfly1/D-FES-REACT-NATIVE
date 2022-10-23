import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';


export default function LocalisationScreen({navigation}) {
    const onPress = () => {
        navigation.navigate('Login')
    }

    const test = () => {
        navigation.navigate('paiement')
    }


    return (
        <View style={styles.container}>
                <Image 
                    style={styles.logo1}
                    source={require('../../../img/1.1.png')}
                />
                <Image 
                    style={styles.logo}
                    source={require('../../../img/logo.png')}
                />
                <Text style={styles.titre}>Autoriser l'accès à votre position</Text>
                <Text style={styles.second}>Identifiez votre position sur la carte et assurez vous de ne rien manquer</Text>
                <Image
                    style={styles.maps}
                    source={require('../../../img/maps.png')}
                />
                <View style={styles.container1}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>  test()}>
                    <Text style={styles.buttonTitle}>Plus tard</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => onPress()}>
                    <Text style={styles.buttonTitle1}>Autoriser</Text>
                </TouchableOpacity>
                </View>
                
                <Text style={styles.trois}>Nous conservons vos données en toutes sécurité</Text>
                <Text style={styles.quatre}>Voir comment</Text>
            
        </View>
        
       
    )
    
}