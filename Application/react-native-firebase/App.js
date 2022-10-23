import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as NavigationBar from 'expo-navigation-bar';
import { LoginScreen, HomeScreen, RegistrationScreen, LocalisationScreen, Acc, PaiementScreen, ProgrammeSreen , ProgrammeblScreen,ProgrammeylScreen,ProgrammeblcScreen, MenuScreen, PlanScreen, BraceletScreen} from './src/screens'
import {decode, encode} from 'base-64'
import styles from './styles';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }



const Stack = createStackNavigator();
export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const visibility = NavigationBar.useVisibility()
  return (
   
    <NavigationContainer  style={styles.stl}>
     <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        { user ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
              <Stack.Screen  name="Localisation" component={LocalisationScreen}  />
              <Stack.Screen  name="Bracelet" component={BraceletScreen}  />
              <Stack.Screen  name="Plan" component={PlanScreen}  />
              <Stack.Screen  name="Menu" component={MenuScreen}  />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registration" component={RegistrationScreen} />
              <Stack.Screen name="Acc" component={ Acc} />
              <Stack.Screen name="paiement" component={PaiementScreen} />
              <Stack.Screen name="Programme" component={ProgrammeSreen} />
              <Stack.Screen name="Programmebl" component={ProgrammeblScreen} />
              <Stack.Screen name="Programmeblc" component={ProgrammeblcScreen} />
              <Stack.Screen name="Programmeyl" component={ProgrammeylScreen} />
          </>

        )}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
  
}

