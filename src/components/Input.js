import { StyleSheet, View, Text, TextInput } from "react-native"

export default ({label = 'Ingresa el dato solicitado', ...rest}) => {
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 12, marginBottom: 4}}>{label}</Text>
            <TextInput
                style={styles.input}
                {...rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        alignSelf: 'stretch',
        marginBottom: 15
    },
    input: {
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        fontSize: 15,
        fontWeight: '500',
        borderWidth: 1,
        borderColor: '#dadada'
    }
})