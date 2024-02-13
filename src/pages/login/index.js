import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const ICO_ESCURO = '../../assets/images/ico-escuro.png';

export function Login({ biometricAuth }) {
  return (
    <View style={[styles.container, styles.shadow]}>
      <Image
        style={styles.ico}
        source={require(ICO_ESCURO)}
      />
      <TouchableOpacity
        style={styles.buttonAuth}
        onPress={biometricAuth}
      >
        <Text style={styles.buttonAuthText}>Autenticar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Centraliza os itens horizontalmente
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 4,
  },
  ico:{
    marginBottom: 20,
    height: 100,
    width: 100,
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 1.0,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 1,
    position: 'relative',
  },
  buttonAuth: {
    backgroundColor: 'rgba(0, 48, 100, 1.0)',
    width: '90%',
    height: 60,
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonAuthText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1.0)',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 40,
  },
});