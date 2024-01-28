import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export function PasswordItem({ dataTitle, dataPassword, removePassword }) {
    return (
        <View style={styles.container}>
            <View>
                <Text>{dataTitle}</Text>
                <Text>{dataPassword}</Text>
            </View>
            <View style={styles.buttons}>
                <Ionicons style={styles.iconActions} name={'eye'} size={22} />
                <Ionicons style={styles.iconActions} name='copy' size={22} />
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
    buttons:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconActions:{
        marginHorizontal: 6,
    }
})