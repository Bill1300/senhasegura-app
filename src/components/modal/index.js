import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import *  as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'


export function ModalPassword({ password, title, closeModal }) {

    const [visiblePass, setVisiblePass] = useState(false);
    const [iconVisiblePass, setIconVisiblePass] = useState('eye-outline')
    const {saveItem} = useStorage();

    function toggleVisiblePassword() {
        if (visiblePass) {
            setVisiblePass(false);
            setIconVisiblePass('eye-outline')
        } else {
            setVisiblePass(true);
            setIconVisiblePass('eye-off-outline')
        }
    }
    async function copyPassword() {
        await Clipboard.setStringAsync(password);
        // Add efeito de 'copiado'
    }
    function savePass(){
        saveItem('@pass', password, title)
        closeModal()
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.passwordBlock}>
                    <Pressable onLongPress={copyPassword}>
                        {visiblePass ? (
                            <Text style={styles.passwordText}>{password}</Text>
                        ) : (
                            <Text style={styles.passwordHidden}>Oculto</Text>
                        )}
                    </Pressable>

                    <Pressable onPress={toggleVisiblePassword}>
                        <Ionicons style={styles.iconVisiblePass} name={iconVisiblePass} color={'rgba(0, 48, 100, 1.0)'} size={30} />
                    </Pressable>
                </View>
                <View style={styles.buttonsBlock}>
                    <TouchableOpacity
                        onPress={closeModal}
                        style={[styles.button, styles.buttonBack]}>
                        <Text style={[styles.buttonText, styles.buttonBackText]}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={savePass}
                        style={[styles.button, styles.buttonSave]}>
                        <Text style={[styles.buttonText, styles.buttonSaveText]}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24, 24, 24, 0.8)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        width: '90%',
        paddingHorizontal: '5%',
        paddingVertical: '10%',
        borderRadius: 4,
    },
    passwordBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'rgba(0, 48, 100, 1.0)',
        marginBottom: 16,
        borderRadius: 4,
        paddingVertical: 8,
    },
    passwordText: {
        marginHorizontal: 8,
        fontWeight: 'bold',
        fontSize: 18,
    },
    passwordHidden:{
        color: 'rgba(0, 48, 100, 1.0)',
        backgroundColor: 'rgba(127, 171, 216, 1.0)',
        fontWeight: 'bold',
        fontSize: 18,
        marginHorizontal: 8,
        paddingHorizontal: 14,
        paddingVertical: 2,
        borderRadius: 50
    },
    iconVisiblePass: {
        marginRight: 8,
    },
    buttonsBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '45%',
        paddingVertical: '4%',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'rgba(0, 48, 100, 1.0)',
    },
    buttonBack: {

    },
    buttonSave: {
        borderColor: 'rgba(0, 48, 100, 1.0)',
        backgroundColor: 'rgba(0, 48, 100, 1.0)',
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonBackText: {
        color: 'rgba(0, 48, 100, 1.0)',
    },
    buttonSaveText: {
        color: 'rgba(255, 255, 255, 1.0)',
    },
})