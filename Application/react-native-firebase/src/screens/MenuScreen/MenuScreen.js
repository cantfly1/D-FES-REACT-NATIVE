import React from "react";

import {ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './styles';
import { Linking } from 'react-native';





export default function MenuScreen({navigation}) {

    const programme = () => {
        navigation.navigate('Programme')
    }
    const plans = () => {
        navigation.navigate('Home')
    }
    const bracelet = () => {
        navigation.navigate('Bracelet')
    }
    const plan = () => {
        navigation.navigate('Plan')
    }
    const home = () => {
        navigation.navigate('Home')
    }

    return (


        <View style={{ flex: 1, alignItems: 'center',backgroundColor: '#fff', }}>



            <Image
                source={require('../../../img/backprog.png')}
                style={styles.ImageBackground}
            />
            <View style={styles.container1}>

                <TouchableOpacity
                    onPress={ () => home()}>
                    <Image
                        source={require('../../../img/menu.png')}
                        style={styles.img}
                    />
                </TouchableOpacity>
                <Image
                    source={require('../../../img/chateauhome.png')}
                    style={styles.img}
                />

            </View>

            <TouchableOpacity
                style={{paddingTop:180}}
                onPress={() => home()}>
                <Image
                    source={require('../../../img/Accueil.png')}
                    style={styles.img}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{paddingTop:60}}
                onPress={() => programme()}>
                <Image
                    source={require('../../../img/Programme.png')}
                    style={styles.img}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{paddingTop:60}}
                onPress={() => plan()}>
                <Image
                    source={require('../../../img/Plans.png')}
                    style={styles.img}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{paddingTop:60}}
                onPress={() => bracelet()}>
                <Image
                    source={require('../../../img/Paiement.png')}
                    style={styles.img}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{paddingTop:60}}
                onPress={() => Linking.openURL('https://web.powerva.microsoft.com/environments/40062e33-f132-ec55-b49c-b1d2d143ad48/bots/new_bot_aa3d7397dc214ea9b88ffdcc905d6c84/webchat')}>
                <Image
                    source={require('../../../img/Aide.png')}
                    style={styles.img}
                />
            </TouchableOpacity>
        </View>

    )

}