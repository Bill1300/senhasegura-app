import React from "react";
import { View, Text, StyleSheet, Pressable} from "react-native";

export function Login({biometricAuth}) {
    return (
        <View style={styles.container}>
            <View style={[styles.settingsBlock, styles.shadow]}>
                <Pressable
                onPress={biometricAuth}
                >
                    <Text>Autenticar</Text>
                </Pressable>
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
})