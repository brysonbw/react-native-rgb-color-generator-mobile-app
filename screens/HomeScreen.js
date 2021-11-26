import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.cardContainer}>
            <Button
        title="Generate Random Color"
        onPress={() => navigation.navigate('generate color')}
      />
      <Button
        title="Create Color"
        onPress={() => navigation.navigate('create color')}
      />
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    cardContainer: {
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 30,
        borderRadius: 10,
        marginBottom: 40
    }
})

export default HomeScreen
