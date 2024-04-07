import {useState} from 'react'
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Card} from './components'
import {useSaved} from './hooks'

export default () => {

    const {handleJustSaved} = useSaved()

    const [data, setData] = useState([
        {
            id: 1, 
            img: 'https://blog.adobe.com/es/publish/2022/04/18/media_1024a921d4efeb870874a3ac8abdfbd6a63ef1ee8.png?width=750&format=png&optimize=medium',
            author: 'Rhonda Walker',
            position: 'Volunteer Coordinator',
            location: 'Austin Texas',
            date: '5th Dec 23, 06:46 PM',
            enabled: true
        },
        { 
            id: 2,
            img: 'https://c4.wallpaperflare.com/wallpaper/715/102/400/eve-online-space-spaceship-wallpaper-preview.jpg',
            author: 'Ferrer Matias',
            position: 'TI Engineer',
            location: 'Las Vegas',
            date: '10th Dec 28, 08:20 PM',
            enabled: true
        },
    ])

    const handleAgregar = () => {
        const nuevo = {
            id: Math.random().toString(),
            img: 'https://www.dreamhost.com/blog/wp-content/uploads/2022/07/optimize-images-for-web-featured-730x485.jpeg',
            author: 'Alexander Mejia',
            position: 'Software Engineer',
            location: 'México',
            date: '15th Jan 03, 08:20 AM',
            enabled: false
        }

        setData([nuevo, ...data])
        handleJustSaved()
    }

    return(
        <>
            <SafeAreaView style={{backgroundColor: '#dadada'}}/>
            <View style={styles.container}>
                <ScrollView
                    style={styles.scroll}>
                    {
                        data.map((x,i,a) => 
                            <Card key={i+1} rango={i+1} last={a.length} {...x}/>
                        )
                    }
                </ScrollView>
                <TouchableOpacity 
                    onPress={handleAgregar}
                    style={styles.button}    
                >
                    <Text style={styles.titleButton}>Agregar Elemento</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={{backgroundColor: '#dadada'}}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1},
    scroll: {
        height: 'auto',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        padding: 12
    },
    button: {
        height: 50,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC300'
    },
    titleButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#383838'
    }
})