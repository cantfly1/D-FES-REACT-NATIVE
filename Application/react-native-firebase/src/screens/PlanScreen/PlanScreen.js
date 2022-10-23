import React from "react";

import {ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './styles';
import { Linking } from 'react-native';



export default function PlanScreen({navigation}) {

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

            <Image
                source={require('../../../img/Carte.png')}
                style={{width:500, height:800, marginTop: 70}}
            />

        </View>

    )
}