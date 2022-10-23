import React, { useState } from 'react'

import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {firebaseApp} from "../../firebase/config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth(firebaseApp)

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }


    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);

                navigation.navigate('Home')

            })
            .catch(error => alert(error.message))
    }


    return (
        <View style={styles.container}>

            <Image
                style={styles.logo1}
                source={require('../../../img/1.2.png')}
            />
            <Image
                style={styles.logo}
                source={require('../../../img/logo.png')}
            />
            <Text style={styles.titre}>Connexion à la plateforme</Text>
            <Text style={styles.second}>Identifiez vous pour pouvoir profiter pleinement du festival</Text>
            <TextInput
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor="#707070"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#707070"
                secureTextEntry
                placeholder='Mot de passe'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleLogin()}>
                <Text style={styles.buttonTitle}>Connexion</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text  onPress={onFooterLinkPress}  style={styles.footerText}>Tu n'as pas de compte ? </Text>
            </View>
            <Text style={styles.trois}>Nous conservons vos données en toutes sécurité</Text>
            <Text style={styles.quatre}>Voir comment</Text>

        </View>
    )
}