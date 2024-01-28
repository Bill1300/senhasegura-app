import React from "react";
import { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import *  as Clipboard from 'expo-clipboard'

export function PasswordItem({ dataTitle, dataPassword, removePassword }) {

    const [visiblePass, setVisiblePass] = useState(false);

    const [iconVisiblePass, setIconVisiblePass] = useState('eye-outline')
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
        await Clipboard.setStringAsync(dataPassword);
    }

    return (
        <View style={styles.container}>
            <Pressable
                onLongPress={copyPassword}>
                <Text>{dataTitle}</Text>
                {visiblePass ? (
                    <Text style={styles.passwordShow}>{dataPassword}</Text>
                ) : (
                    <Text style={styles.passwordHidden}>Oculto</Text>
                )}
            </Pressable>
            <View style={styles.buttons}>
                <Pressable onPress={toggleVisiblePassword}>
                    <Ionicons style={styles.iconActions} name={iconVisiblePass} size={22} color={'rgba(0, 48, 100, 1.0)'} />
                </Pressable>
                <Ionicons style={styles.iconActions} name='trash' size={22} color='rgba(204, 0, 0,1.0)' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: 'rgba(0, 48, 100, 1.0)',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconActions: {
        marginHorizontal: 6,
    },
    passwordShow: {
        color: 'rgba(0, 48, 100, 1.0)',
        fontWeight: 'bold',
        fontSize: 14,
        paddingVertical: 2,
    },
    passwordHidden: {
        color: 'rgba(0, 48, 100, 1.0)',
        backgroundColor: 'rgba(127, 171, 216, 1.0)',
        fontWeight: 'bold',
        fontSize: 14,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 50
    },
})