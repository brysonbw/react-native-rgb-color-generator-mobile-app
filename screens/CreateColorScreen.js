import React, {useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import ColorAdjuster from '../components/ColorAdjuster'

const CreateColorScreen = ({navigation}) => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const rgb = `rgb(${red}, ${green}, ${blue})`

    const COLOR_INCREMENT = 15

    // adjust rgb color validation > no values less than 0 & no values greater than 255 
    const setColor = (color, change) => {
        switch (color) {
            case 'red': 
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return
            case 'green': 
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return
            case 'blue': 
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return
            default:
            return
        }
    }

    return (
        <View style={styles.screen}>
            <Button title="Home" onPress={() => navigation.navigate('home')} /> 
            <ColorAdjuster
            onIncrease={() => setColor('red', COLOR_INCREMENT )}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
             color="Red" />
            <ColorAdjuster
             onIncrease={() => setColor('green', COLOR_INCREMENT)}
             onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
             color="Green" />
            <ColorAdjuster
             onIncrease={() => setColor('blue', COLOR_INCREMENT)}
             onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
             color="Blue" />
             <View style={{height: 100, marginTop: 20,
                width: 100, borderRadius: 30, backgroundColor: rgb }}>

             </View>
             <Text style={{marginTop: 10, fontSize: 20}}>{rgb}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    }
})

export default CreateColorScreen
