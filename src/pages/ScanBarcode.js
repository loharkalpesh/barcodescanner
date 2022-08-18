import { Alert, StyleSheet, Text } from 'react-native';
import React from 'react';
import { RNCamera } from 'react-native-camera';
import Colors from '../utils/Colors';
import Strings from '../utils/Strings';

const ScanBarcode = () => {
    const onBarCodeRead = (e) => {
        Alert.alert("Barcode value is" + e.data, "Barcode type is" + e.type);
    }

    return (
        <RNCamera
            style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}
            torchMode={RNCamera.Constants.FlashMode.auto}
            onBarCodeRead={onBarCodeRead}
            captureAudio={false}>
            <Text style={styles.text}>{Strings.barcode_scanner}</Text>
        </RNCamera>
    )
}

export default ScanBarcode

const styles = StyleSheet.create({
    text: {
        backgroundColor: Colors.white,
        color: Colors.primary,
        width: '100%',
        textAlign: 'center',
        padding: 30,
        fontSize: 20,
        fontWeight: '900'
    }
})