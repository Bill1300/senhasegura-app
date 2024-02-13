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
    const compatible = await LocalAuthentication.hasHardwareAsync();
    if(!compatible){
      return Alert.alert('Erro', 'Dispositivo sem autenticação por biometria');
    }
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (!types.includes(1)) {
      Alert.alert('Erro', 'Biometria não suportada.');
    }
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    if(!isBiometricEnrolled){
      return Alert.alert('Erro', 'Nenhuma biometria cadastrada no dispositivo.');
    }
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Entrada em SenhaSegura por biometria',
      fallbackLabel: 'Biometria não reconhecida'
    });
    setBiometric(auth.success)
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
