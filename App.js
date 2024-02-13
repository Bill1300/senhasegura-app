import { NavigationContainer } from '@react-navigation/native'
import { useEffect, useState } from 'react';
import { Login } from './src/pages/login';
import { Routes } from './src/routes'
import * as LocalAuthentication from 'expo-local-authentication'

export default function App() {

  const [biometric, setBiometric] = useState(false);

  useEffect(() => {
    handleAuthentication();
  }, []);

  async function handleAuthentication(){
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    if(!isBiometricEnrolled){
      return Alert.alert('Erro', 'Nenhuma biometria cadastrada no dispositivo.');
    }
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Entrada com biometria',
      fallbackLabel: 'Biometria não reconhecida'
    });
    console.log(auth)
    setBiometric(auth.success)
  }

  async function verifyAvailableAuthentication(){
    const compatible = await LocalAuthentication.hasHardwareAsync();
    console.log('compatible ', compatible);
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log('types ', types)
  }

  return (
    <>
      {biometric ? (
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      ) : (
        <Login biometricAuth={handleAuthentication}/>
      )}
    </>
  )
}
