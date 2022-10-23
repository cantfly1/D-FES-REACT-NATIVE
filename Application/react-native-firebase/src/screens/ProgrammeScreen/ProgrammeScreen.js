import React from "react";

import {ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';

export default function ProgrammeSreen({navigation}) {
    const Blue = () => {
        navigation.navigate('Programmebl')
    }
    const Black = () => {
        navigation.navigate('Programmeblc')
    }
    const Yellow = () => {
        navigation.navigate('Programmeyl')
    }
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
            source={require('../../../img/prog.png')}
            style={styles.img}
        />
        
       </View>
       <View style={styles.container2}>
                    <Text style={styles.titre2} onPress={() => Yellow()}>Yellow stage</Text>
                    <Text style={styles.titre3}>Reg stage</Text>
                    <Text style={styles.titre2}  onPress={() => Blue()}>Blue Stage</Text>
                    <Text style={styles.titre2}  onPress={() => Black()}>Black stage</Text>
            </View>
      <Image
            source={require('../../../img/redstage.png')}
            style={styles.img1}
        />
    
    </View>
    )
}