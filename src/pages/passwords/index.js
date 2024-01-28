import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage';
import { PasswordItem } from './components/passwordItem';

export function Passwords() {

    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem('@pass');
            setListPasswords(passwords);
        }
        loadPasswords()
    }, [focused])

    async function deleteItem(item) {
        const passwordsUpdated = await removeItem('@pass', item.id);
        setListPasswords(passwordsUpdated);
    }

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={listPasswords.sort((a, b) => a.title.localeCompare(b.title))}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <PasswordItem dataIndex={item.id} dataTitle={item.title} dataPassword={item.password} deleteItem={() => deleteItem(item)} />}
                    style={styles.flatList}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(0, 48, 100, 1.0)',
        paddingTop: '25%',
    },
    title: {
        color: 'rgba(255,255,255,1.0)',
        fontSize: 22,
        marginBottom: 4,
        marginLeft: 8,
        fontWeight: 'bold'
    },
    content: {
        paddingHorizontal: 10,
    },
    flatList: {
        marginHorizontal: 4,
        marginVertical: 4,
    }
})