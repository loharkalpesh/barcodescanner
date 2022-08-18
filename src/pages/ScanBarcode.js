import { StyleSheet, View } from 'react-native';
import React from 'react';
import { RNCamera } from 'react-native-camera';
import Colors from '../utils/Colors';
import DialogInput from 'react-native-dialog-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from '../utils/Constants';

const ScanBarcode = ({ navigation }) => {
    const [data, setDataaaa] = React.useState([]);
    const [barcodeReaded, setBarcodeReaded] = React.useState(false);
    const [dialogVisible, setdialogVisible] = React.useState(false);

    const [title, setTitle] = React.useState('');
    const [value, setValue] = React.useState('');

    const onBarCodeRead = (e) => {
        setBarcodeReaded(true);
        setdialogVisible(true);
        setValue(e.data);
    }

    const setData = async () => {
        try {
            await AsyncStorage.setItem(Constants.barcodes, JSON.stringify(data));
        } catch (error) {
            console.log("There are some error", error);
        }
    };

    const submitInput = async (input) => {
        setTitle(input);
        setdialogVisible(false);
        try {
            const newD = {
                id: data.length + 1,
                title: input,
                value: value,
            };
            setDataaaa([...data, newD]);
            console.log([...data, newD]);
            navigation.pop();
        } catch (error) {

        }
    }

    const getData = async () => {
        try {
            const t = await AsyncStorage.getItem(Constants.barcodes);
            if (t != null) {
                setDataaaa(JSON.parse(t));
            }
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        setBarcodeReaded(false);
        getData();
    }, [navigation])

    React.useEffect(() => {
        setData();
    }, [data])

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