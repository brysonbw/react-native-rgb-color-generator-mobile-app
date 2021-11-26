import React, {useState} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const GenerateColorScreen = ({navigation}) => {
    const [rgbColor, setRgbColor] = useState(randomRgb())

    return (
        <View style={styles.screen}>
           <Button title="Home" onPress={() => navigation.navigate('home')} /> 
           <View style={styles.btnContainer}>
                <Button title="Generate Color" onPress={() => setRgbColor(randomRgb())} />
           </View>
           <View  style={[styles.colorCircle, { backgroundColor: rgbColor }]}>
           </View>
           <Text style={{marginTop: 20, fontSize: 20}}>{randomRgb()}</Text>
        </View>
    )
}

   // randomRgb function
   const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center' 
    },
    colorCircle: {
        height: 100,
        width: 100,
        borderRadius: 30,
        marginTop: 20
    },
    btnContainer: {
        alignItems:'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        width: 200,
        maxWidth: '80%',
    }
})


export default GenerateColorScreen
