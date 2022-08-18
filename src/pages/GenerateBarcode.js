import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Barcode from "react-native-barcode-builder";
import Colors from '../utils/Colors';
import Header from '../components/Header';

const GenerateBarcode = ({ navigation }) => {
    const [string, setString] = React.useState(null);
    const base = 36;

    const generateUniqueString = () => {
        return Math.random().toString(base).slice(2);
    }

    React.useEffect(() => {
        let v = generateUniqueString();
        setString(v);
        console.log(v);
    }, [navigation])

    return (
        <>
            <Header title={'Generate Barcode'} />
            {string !== null && (
                <View style={[styles.screen, { marginTop: -20 }]}>
                    <View style={styles.card}>
                        <Barcode value={string} format="CODE128" />
                        <Text style={styles.text}>{string}</Text>
                    </View>
                </View>)}
        </>
    )
}

export default GenerateBarcode

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    card: {
        width: '90%',
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: Colors.primary,
        textAlign: 'center',
        padding: 15,
    }
})