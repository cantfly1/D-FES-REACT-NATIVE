import React from "react";

import {ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import styles from './styles';
import { Linking } from 'react-native';





export default function HomeScreen({navigation}) {
    const Programme = () => {
        navigation.navigate('Programme')
    }
    const paiement = () => {
        navigation.navigate('paiement')
    }
    const menu = () => {
        navigation.navigate('Menu')
    }
    const bracelet = () => {
        navigation.navigate('Bracelet')
    }

    return (


        <View style={{ flex: 1, alignItems: 'center',backgroundColor: '#fff', }}>



            <Image
                source={require('../../../img/background.png')}
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
                    source={require('../../../img/chateauhome.png')}
                    style={styles.img}
                />
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => paiement()}>
                    <Image
                        source={require('../../../img/user.png')}
                        style={styles.img}
                    />
                </TouchableOpacity>

            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Image
                        source={require('../../../img/passport.png')}
                        style={styles.img}
                    />
                    <Text style={styles.trois}>Obtenir un pass priorité</Text>
                </View>
                <View style={styles.container3}>
                    <Image
                        source={require('../../../img/parleur.png')}
                        style={styles.img}
                    />
                    <Text style={styles.trois}  onPress={() => Programme()}>Voir le  planning</Text>
                </View>
                <View style={styles.container3}>
                    <TouchableOpacity
                        onPress={ () => bracelet()}>
                    <Image
                        source={require('../../../img/money.png')}
                        style={styles.img}
                    />
                    <Text style={styles.trois}>Gérer son argent</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.container4}>
                <Text style={styles.titre}>Bienvenue</Text>
                <Text style={styles.second}>à notre deuxième festival pour l'écologie , faisons plus faisons mieux ! </Text>

                <TouchableOpacity style={styles.button}>

                    <Text style={{color: 'white'}}
                          onPress={() => Linking.openURL('https://widget.weezevent.com/ticket/E866937/?code=27922&locale=fr-FR&width_auto=1&color_primary=00AEEF')}>
                        Billets
                    </Text>

                </TouchableOpacity>


              
            </View>


            <View style={styles.container7}>
                <View style={styles.container6}>
                    <Image
                        source={require('../../../img/loca.png')}
                        style={styles.img}
                    />

                </View>
                <View style={styles.container5}>
                    <Text style={styles.titre1}>Autoriser la Localisation</Text>
                    <Text style={styles.second1}>Activer pour profiter de toutes les fonctionnalités clés de l'app une fois dans le festival </Text>
                </View>
                <View style={styles.container6}>
                    <Image
                        source={require('../../../img/fleche.png')}
                        style={styles.img}
                    />

                </View>
            </View>
            <Text style={styles.titre2}>HORAIRES DU FESTIVAL</Text>

            <View style={styles.container8}>
                <View style={styles.container9}>
                    <Text style={styles.trois}>Samedi 21 Août</Text>
                    <View style={styles.container10}>
                        <Image
                            source={require('../../../img/pluiesol.png')}
                            style={styles.img}
                        />
                        <Text style={styles.trois}>Château de Chambord</Text>
                        <Text style={styles.trois}>11h-00h</Text>
                    </View>
                </View>
                <View style={styles.container9}>
                    <Text style={styles.trois}>Dimanche 22 Aout</Text>
                    <View style={styles.container10}>
                        <Image
                            source={require('../../../img/pluie.png')}
                            style={styles.img}
                        />
                        <Text style={styles.trois}>Château de Chambord</Text>
                        <Text style={styles.trois}>11h-00h</Text>
                    </View>
                </View>



            </View>

          


        </View>

    )

}







