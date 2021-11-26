import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '13%',
        backgroundColor: '#396EB0',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30
    },
    headerTitle: {
        color: 'white',
        fontSize: 18
    }
    });
    
export default Header