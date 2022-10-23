import React, {useEffect, useState} from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {firebaseApp} from "../../firebase/config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";





export default function RegistrationScreen({navigation}) {
    const [fullName, setFullName, ] = useState('')
    const [ prenom,setPrenom] = useState('')
    const [ Num,setNum] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }


    const auth = getAuth(firebaseApp)


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                // Signed in
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
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
            <Text style={styles.titre}>Inscription à la plateforme</Text>
            <Text style={styles.second}>Identifiez vous pour pouvoir profiter pleinement du festival</Text>
            <TextInput
                style={styles.input}
                placeholder='Numéro billet'
                placeholderTextColor="#707070"
                onChangeText={(text) => setNum(text)}
                value={Num}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder='Prenom'
                placeholderTextColor="#707070"
                onChangeText={(text) => setPrenom(text)}
                value={prenom}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder='Nom de Famille'
                placeholderTextColor="#707070"
                onChangeText={(text) => setFullName(text)}
                value={fullName}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#707070"

                placeholder='email'
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#707070"
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#707070"
                secureTextEntry
                placeholder='Confirm Password'
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}>
                <Text style={styles.buttonTitle}>Inscription</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text onPress={onFooterLinkPress} style={styles.footerText}>Déjà un compte? </Text>
            </View>
            <Text style={styles.trois}>Nous conservons vos données en toutes sécurité</Text>
            <Text style={styles.quatre}>Voir comment</Text>

        </View>
    )
}