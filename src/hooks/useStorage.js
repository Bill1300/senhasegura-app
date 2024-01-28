import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
    const getItem = async (key) => {
        //Buscar itens.
        try {
            const items = await AsyncStorage.getItem(key);
            return JSON.parse(items) || [];
        } catch (err) {
            console.error('[ERRO AO BUSCAR ITENS SALVOS - getItem()] ', err);
            return [];
        }
    }

    const saveItem = async (key, passwordValue, titleValue) => {
        try {
            let passwords = await getItem(key);
            passwords.sort((a, b) => a.id - b.id);
            let passIndex = null;

            for (let i = 0; i < passwords.length; i++) {
                const obj = passwords[i];
                if (obj.id !== i) {
                    passIndex = i;
                    break;
                }
            }
            if (passIndex === null) {
                passIndex = passwords.length;
            }

            passwords.push({ id: passIndex, password: passwordValue, title: titleValue });
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (err) {
            console.error('[ERRO AO SALVAR ITENS - saveItem()] ', err);
        }
    }
    const removeItem = async (key, idRemove) => {
        try {
            let passwords = await getItem(key);
            let myPasswords = passwords.filter((password) => {
                return password.id !== idRemove;
            });
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;

        } catch (err) {
            console.error('[ERRO AO REMOVER ITENS - removeItem()] ', err);
        }
    }


    return {
        getItem, saveItem, removeItem,
    }
}

export default useStorage;