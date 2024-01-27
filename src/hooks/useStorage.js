import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
    const getItem = async (key) => {
    //Buscar itens.
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (err) {
            console.log('[ERRO AO BUSCAR ITENS SALVOS - getItem()] ', err);
            return [];
        }
    }

    const saveItem = async (key, passwordValue, titleValue) => {
    //Salvar itens.
        try {
            let passwords = await getItem(key);
            passwords.push(passwordValue); //add title
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (err) {
            console.log('[ERRO AO SALVAR ITENS - saveItem()] ', err);
        }
    }
    const removeItem = async (key, item) => {
    //Remover itens.
        try {
            let passwords = await getItem(key);
            let myPasswords = passwords.filter((password) => {
                return (password !== item);
            })
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;
        } catch (err) {
            console.log('[ERRO AO REMOVER ITENS - removeItem()] ', err);
        }
    }

    return {
        getItem, saveItem, removeItem,
    }
}

export default useStorage;