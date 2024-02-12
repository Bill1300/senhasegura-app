import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import useStorage from '../../hooks/useStorage';


export function ModalDelete({dataIndexDelete, dataTitleDelete, closeModal }) {

    const {removeItem} = useStorage();

    async function deleteItem() {
        closeModal()
        removeItem('@pass', dataIndexDelete);
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.layoutText} >Você quer deletar <Text style={[styles.layoutText, styles.layoutTextBold]} >{dataTitleDelete}</Text> ?</Text>
                <View style={styles.buttonsBlock}>
                    <TouchableOpacity
                        onPress={closeModal}
                        style={[styles.button, styles.buttonBack]}>
                        <Text style={[styles.buttonText, styles.buttonBackText]}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={deleteItem}
                        style={[styles.button, styles.buttonDelete]}>
                        <Text style={[styles.buttonText, styles.buttonDeleteText]}>Deletar</Text>
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
    layoutText:{
        fontSize: 16,
        marginBottom: 8,
    },
    layoutTextBold:{
        fontWeight: 'bold',
        fontSize: 16,
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
    buttonDelete: {
        borderColor: 'rgba(204, 0, 0,1.0)',
        backgroundColor: 'rgba(204, 0, 0,1.0)',
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonBackText: {
        color: 'rgba(0, 48, 100, 1.0)',
    },
    buttonDeleteText: {
        color: 'rgba(255, 255, 255, 1.0)',
    },
})