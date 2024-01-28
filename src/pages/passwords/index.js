import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage';
import { PasswordItem } from './components/passwordItem';

export function Passwords() {

    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const {getItem} = useStorage();

    useEffect(() => {
        async function loadPasswords(){
            const passwords = await getItem('@pass');
            console.log(passwords);
            setListPasswords(passwords);
        }
        loadPasswords()
    }, [focused])

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={listPasswords}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => <PasswordItem dataTitle={item.title} dataPassword={item.password} />}
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
    content:{
        paddingHorizontal: 10,
    },
    flatList:{
        marginHorizontal: 4,
        marginVertical: 4,
    }
})