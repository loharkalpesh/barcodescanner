import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RNCamera } from 'react-native-camera';
import Colors from '../utils/Colors';
import DialogInput from 'react-native-dialog-input';

const ScanBarcode = ({ navigation }) => {
    const [barcodeReaded, setBarcodeReaded] = React.useState(false);
    const [dialogVisible, setdialogVisible] = React.useState(false);
    const [title, setTitle] = React.useState('');

    const onBarCodeRead = (e) => {
        setBarcodeReaded(true);
        setdialogVisible(true);
        console.log("Barcode value is" + e.data, "Barcode type is" + e.type);
    }

    const submitInput = (input) => {
        setTitle(input);
        console.log(input);
        setdialogVisible(false);
        navigation.pop();
    }

    React.useEffect(() => {
        setBarcodeReaded(false);
    }, [navigation])

    return (
        <>
            <RNCamera
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}
                dialogStyle={{ color: Colors.black }}
                torchMode={RNCamera.Constants.FlashMode.auto}
                onBarCodeRead={onBarCodeRead}
                barCodeTypes={barcodeReaded ? [] : [RNCamera.Constants.BarCodeType.code128]}
                captureAudio={false}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "column", flex: 1 }}>
                    <View style={styles.border} />
                </View>
            </RNCamera>
            <DialogInput isDialogVisible={dialogVisible}
                title="Barcode Title"
                message="Enter Barcode title to save"
                submitInput={(inputText) => { submitInput(inputText) }}
                closeDialog={() => { setdialogVisible(true) }} />
        </>
    )
}

export default ScanBarcode

const styles = StyleSheet.create({
    border: {
        borderColor: Colors.black,
        borderWidth: 1,
        height: 100,
        width: 270,
    }
})