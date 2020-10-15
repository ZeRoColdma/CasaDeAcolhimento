import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'
import {Feather} from '@expo/vector-icons'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import {useNavigation} from '@react-navigation/native'

import mapMarker from '../images/map-marker2x.png'


export default function OrphanagesMap(){
  const navigation = useNavigation();

  function handleNavigationToOrphanageDetails(){
    navigation.navigate('OrphanageDetails')
  }

  return (
    <View style={styles.container}>
      <MapView 
      provider={PROVIDER_GOOGLE}
      style={styles.map} 
      initialRegion={{
        latitude: -2.5092334,
        longitude: -44.2512528,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008
      }}
      >
        <Marker
          calloutAnchor={{
            x:3.3,
            y: 1.0
          }}
          icon={mapMarker}
          coordinate={{
          latitude: -2.5092334,
          longitude: -44.2512528,
        }}
        >
          <Callout tooltip onPress={handleNavigationToOrphanageDetails}>
            <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}>Lar das meninas</Text>
            </View>
          </Callout>
          </Marker>
        </MapView>

        <View style={styles.footer}>
          <Text style={styles.footerText}>2 orfanatos encontrados</Text>

          <TouchableOpacity style={styles.createOrphanateButton} onPress={()=>{}}>
            <Feather name="plus" size={20} color="#FFF"/>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

  calloutContainer:{
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText:{
    color: "#0089a5",
    fontSize: 14,
    fontFamily: 'Nunito_700Bold'
  },

  footer:{
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: '#FFF',
    height: 46,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,

    elevation: 3
  },

  footerText:{
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold'
  },


  createOrphanateButton:{
    width: 56,
    height: 46,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 3
  },

});