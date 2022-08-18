import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>)
}

export default Header

const styles = StyleSheet.create({
    header: {
        padding: 17,
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 10,
    },
    headerText: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: '700',
    },
})