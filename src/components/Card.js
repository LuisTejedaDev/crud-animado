import React, {useEffect} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import {selectNewElement} from '../slices/appSlice'
import {useSelector} from 'react-redux'
import Animated, {useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming} from 'react-native-reanimated'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({rango, img, author, position, location, date, last}) => {
    
    const opacity = useSharedValue(1)
    const newElement = useSelector(selectNewElement)

    const mustAnimate = (newElement && rango === 1) ? true : false
    
    const handleAnimated = () => {
        if(newElement){
            opacity.value = withRepeat(
                withSequence(
                    withTiming(0.3, {duration: 1000}),
                    withTiming(1, {duration: 1000})
                ),
                0
            )
        } else opacity.value = 1
    }

    useEffect(() => {
        handleAnimated()
    }, [newElement])

    const animatedSyles = useAnimatedStyle(() => ({
        opacity: opacity.value
    }))

    return(
        <>
            <Animated.View style={[styles.container, {backgroundColor: mustAnimate ? '#f1f1f1' : '#fff', paddingTop: rango === 1 ? 0 : 12}, (rango === 1) && animatedSyles]}>
                {
                    mustAnimate
                    ?
                        <View style={[styles.image, {backgroundColor: '#adadad'}]} />
                    :
                        <Image 
                            style={styles.image}
                            source={{uri: img}}
                            resizeMode='cover'
                        />
                }

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#383838', marginBottom: 4}}>{author}</Text>
                        <Text style={{fontSize: 13, color: '#adadad', marginBottom: 4}}>{position}</Text>
                        <Text style={{fontSize: 13, color: '#adadad'}}>{location}</Text>
                    </View>
                    <View style={{width: 30, height: 110, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{width: 25, height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f1f1', borderRadius: 30}}>
                            <Material name={'dots-vertical'} size={18} color={'#383838'}/>
                        </View>
                    </View>
                </View>

                <View style={{position: 'absolute', bottom: 4, right: 4}}>
                    <Text style={{fontSize: 10, color: '#adadad'}}>{date}</Text>
                </View>
            </Animated.View>

            {
                rango !== last
                &&
                    <View style={{height: 1, alignSelf: 'stretch', backgroundColor: '#d1d1d1'}}/>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 110,
        alignSelf: 'stretch',
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 80,
        width: 110,
        marginRight: 12,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#dadada'
    }
})