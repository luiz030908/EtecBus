import React, { useState, useEffect, useRef } from 'react'
import { ActivityIndicator, TouchableOpacity, Platform, Linking, StyleSheet, Text, View } from 'react-native';
import { webView } from 'react-native-webview';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';

// Configurações de Localização
const SCHOOL = {
  id: 'school',
  name: 'ETEC Comendador João Rays',
  coordinate: { latitude: -22.489201836318337, longitude: -48.54641407188601 },
  address: 'Rua Ludovico Victório, 2140, Barra Bonita - SP'
}

const BUS_STOPS = [
  {
    id: 'stop_1',
    name: 'Autoescola Muriano',
    address: 'Rua Geraldo Fazzio, 484',
    coordinate: { latitude: 0, longitude: 0 },
    lines: ['Nova Barra'],
  },
  {
    id: 'stop_2',
    name: '',
    address: '',
    coordinate: { latitude: 0, longitude: 0 },
    lines: [''],
  },
]

// Distância Haversine (metros)
// c1 e c2 = pontos que serão calculados
function getDistance(c1, c2) {
  const R = 6371e3;
  const q1 = (c1.latitude *Math.PI) / 180;
  const q2 = (c2.latitude *Math.PI) / 180;
  const dq = ((c2.latitude - c1.latitude) * Math.PI) / 180;
  const dt = ((c2.longitude - c1.longitude) * Math.PI) / 180;
  const a =
    Math.sin(dq / 2) ** 2 +
    Math.cos(q1) * Math.cos(q2) * Math.sin(dt / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(m) {
  return m < 1000 ? `${Math.round(m)} m` : `${(m / 1000).toFixed(1)} km`
}

// HTML do Leaflet (OpenStreetMap - sem chave)
function buildLeafletHTML (userCoord, nearestStopId, selectedStopId) {
  const stopsJSON = JSON.stringify(BUS_STOPS);
  const schoolJSON = JSON.stringify(SCHOOL);
  const userJSON = userCoord ? JSON.stringify(userCoord) : 'null';

  return ``;
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});