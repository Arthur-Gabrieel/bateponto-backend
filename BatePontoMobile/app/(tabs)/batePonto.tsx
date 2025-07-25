import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function BatePonto() {
  return (
<ImageBackground source={require('../../assets/images/fundo.jpeg')}
       style={styles.fundoPagina}>
    <View style={styles.container}>
      <Text style={styles.title}>Bate Ponto</Text>
      <View style={styles.quadrado} />
       


        
       
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  fundoPagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  quadrado: {
    width: 150,
    height: 150,
    backgroundColor: '#155a9c',
    borderRadius: 10,
  },
});