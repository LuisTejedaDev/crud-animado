import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default ({title, backgroundColor = '#adadad'}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColor}]}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        alignSelf: 'stretch',
        marginBottom: 12
    },
    button: {
        height: 50,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#12BD9B',
    },
    buttonTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
})