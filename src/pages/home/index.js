import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Modal, StyleSheet, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/modalView';

const ICO_CLARO = '../../assets/images/ico-claro.png';
const ICO_ESCURO = '../../assets/images/ico-escuro.png';

export function Home() {

  const [titleValue, setTitleValue] = useState('');
  const [characters, setCharacters] = useState(true);
  const [numbersDigits, setNumbersDigits] = useState(10);
  const [passwordValue, setPasswordValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const baseCharset1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/[]{}|';
  const baseCharset2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  function toggleValueCheckbox() {
    if (characters) {
      setCharacters(false);
    } else {
      setCharacters(true);
    }
  }

  function generatePassword() {
    var charset = characters ? baseCharset1 : baseCharset2;
    let pass = '';
    for (let i = 0, n = charset.length; i < numbersDigits; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setPasswordValue(pass)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <View style={[styles.settingsBlock, styles.shadow]}>
        <View style={styles.headerBlock}>
          <Image
            style={styles.ico}
            source={require(ICO_CLARO)}
          />
          <Text style={styles.headerText}>SenhaSegura</Text>
        </View>
        <TextInput
          style={styles.titleInput}
          value={titleValue}
          onChangeText={setTitleValue}
          placeholder='Título'
        />
        <View style={styles.characters}>
          <Checkbox
            style={styles.charactersCheckbox}
            value={characters}
            onValueChange={setCharacters}
            color={characters ? 'rgba(30, 160, 30, 1.0)' : 'rgba(255, 255, 255, 1.0)'}
          />
          <Pressable onPress={toggleValueCheckbox}>
            <Text style={styles.charactersText}>Caracteres especiais</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.textDigits}>Tamanho: {numbersDigits}</Text>
          <Slider
            style={styles.sliderDigits}
            value={numbersDigits}
            onValueChange={(value) => setNumbersDigits(value.toFixed(0))}
            minimumValue={8}
            maximumValue={24}
            minimumTrackTintColor='rgba(255, 255, 255, 1.0)'
            maximumTrackTintColor='rgba(0, 23, 48, 1.0)'
            thumbTintColor='rgba(255, 255, 255, 1.0)'
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.buttonGenerate, styles.shadow]}
        onPress={generatePassword}
      >
        <Text style={styles.buttonGenerateText}>Gerar senha</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} title={titleValue} closeModal={() => setModalVisible(false)} />
      </Modal>
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    position: 'relative'
  },
  settingsBlock: {
    backgroundColor: 'rgba(0, 48, 100, 1.0)',
    width: '90%',
    paddingHorizontal: '5%',
    paddingVertical: '10%',
    borderRadius: 4,
  },
  headerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 22,
    marginLeft: 8,
    color: 'rgba(255, 255, 255, 1.0)',
  },
  ico: {
    height: 45,
    width: 45,
    marginLeft: 4,
  },
  titleInput: {
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    margin: 4,
    padding: 4,
    fontSize: 20,
    borderRadius: 4,
    marginBottom: 10,
  },
  characters: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4,
    marginTop: 8,
  },
  charactersCheckbox: {
    height: 25,
    width: 25,
    borderRadius: 4,
  },
  charactersText: {
    color: 'rgba(255, 255, 255, 1.0)',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    margin: 4,
  },
  textDigits: {
    color: 'rgba(255, 255, 255, 1.0)',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
  },
  sliderDigits: {
    margin: 4,
    width: 'auto',
    padding: 8,
  },
  buttonGenerate: {
    backgroundColor: 'rgba(0, 48, 100, 1.0)',
    width: '90%',
    paddingVertical: '2%',
    marginTop: 20,
    borderRadius: 4,
  },
  buttonGenerateText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1.0)',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 40,
  }
})