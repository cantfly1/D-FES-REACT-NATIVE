import React from "react";

import {ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './styles';
import { Linking } from 'react-native';



export default function BraceletScreen({navigation}) {

    const menu = () => {
        navigation.navigate('Menu')
    }

    return (


        <View style={{ flex: 1, alignItems: 'center',backgroundColor: '#fff', }}>



            <Image
                source={require('../../../img/backprog.png')}
                style={styles.ImageBackground}
            />
            <View style={styles.container1}>

                <TouchableOpacity
                    onPress={ () => menu()}>
                    <Image
                        source={require('../../../img/menu.png')}
                        style={styles.img}
                    />
                </TouchableOpacity>
                <Image
                    source={require('../../../img/Paiement.png')}
                    style={styles.img}
                />

            </View>

            <Image
                source={require('../../../img/Bracelet.png')}
                style={{marginTop: 170}}
            />

        </View>

    )
}