import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import {useFonts} from 'expo-font'
import {Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito'

import Routes from './src/routes'

export default function App() {

  const [fontsLoad] = useFonts({
    Nunito_600SemiBold, 
    Nunito_700Bold, 
    Nunito_800ExtraBold
  })

  if(!fontsLoad){
    return null
  }

  return (
    <Routes/>
  );
}


