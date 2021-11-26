import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorAdjuster = ({color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text style={{textAlign: 'center', fontSize: 25, paddingTop: 13 }}>
                {color}
            </Text>
            <View style={styles.adjustContainer}>
                <Button onPress={() => onIncrease()} title='Increase' />
            </View>
            <View style={styles.adjustContainer}>
                <Button onPress={() => onDecrease()} title='Decrease' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    adjustContainer: {
        alignItems:'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
        marginTop: 20,
        width: 200,
        maxWidth: '80%', 
    }
})

export default ColorAdjuster
