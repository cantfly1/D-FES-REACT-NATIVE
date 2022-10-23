import React from "react";

import {ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './styles';
import { Linking } from 'react-native';


export default function PaiementScreen({navigation}) {

    const home = () => {
        navigation.navigate('Home')
    }
    return (



        <View style={styles.container}>



            <Image
                source={require('../../../img/backgroundd.png')}
                style={styles.ImageBackground}

            />

            <TouchableOpacity
                style = {{paddingTop:60}}
                onPress={() => home()}>
                <Image
                    source={require('../../../img/user.png')}
                    style={styles.img}
                />
            </TouchableOpacity>

            <Text style={styles.titre}> Bienvenue User </Text>
            <View style={styles.container54}>
                <View style={styles.container8}>




                    <View style={styles.container9}>
                        <View style={styles.container10}>
                            <Image
                                source={require('../../../img/QR.png')}
                                style={styles.img}
                            />


                            <View style={styles.container20}>
                            <Text style={styles.trois}
                                  onPress={() => Linking.openURL('https://widget.weezevent.com/ticket/E866937/?code=27922&locale=fr-FR&width_auto=1&color_primary=00AEEF')}>>
                                Mon billets ou pass</Text>
                                <Text style={styles.trois}>Retrouvez votre Billet ou Pass ici</Text>
                            </View>


                        </View>
                    </View>
                    <View style={styles.container9}>

                        <View style={styles.container10}>
                            <Image
                                source={require('../../../img/ouvrir.png')}
                                style={styles.img}
                            />
                            <Text style={styles.trois}>Mon programme</Text>
                            <Text style={styles.trois}>Voir les activités que vous pouvez faire</Text>
                        </View>

                    </View>


                </View>



                <Text style={styles.troiss}>MON PROFIL</Text>


                <View style={styles.container8}>




                    <View style={styles.container12}>

                        <View style={styles.container13}>
                            <Image
                                source={require('../../../img/para.png')}
                                style={styles.img}
                            />
                            <View style={styles.container14}>
                                <Text style={styles.paraa}>Mes paramètres de compte</Text>
                                <Text style={styles.paraa}>Modifier votre mot de passe</Text>
                            </View>


                        </View>
                        <View style={styles.container15}>
                            <Image
                                source={require('../../../img/para.png')}
                                style={styles.img}
                            />
                            <View style={styles.container16}>
                                <Text style={styles.paraaa}>Mes moyens de paiement</Text>
                                <Text style={styles.paraaa}>Voir vos paiement enregister </Text>
                            </View>


                        </View>
                        <View style={styles.container17}>
                            <Image
                                source={require('../../../img/para.png')}
                                style={styles.img}
                            />
                            <View style={styles.container18}>
                                <Text style={styles.paraaa}>Mes moyens de paiement</Text>
                                <Text style={styles.paraaa}>Voir vos paiement enregister </Text>
                            </View>


                        </View>

                    </View>





                </View>

            </View>



        </View>
    )
}

