import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Colors from '../utils/Colors';
import Strings from '../utils/Strings';

const Welcome = ({ navigation }) => {

  const goToGenerateBarCode = () => {
    navigation.push(Strings.GenerateBarcodeScreen);
  }
  const goToScanBarCode = () => {
    navigation.push(Strings.ScanBarcodeScreen);
  }
  const goToHistory = () => {
    navigation.push(Strings.HistoryScreen);
  }

  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={goToGenerateBarCode}>
        <Text style={[styles.text, styles.buttontext]}>{Strings.generate_barcode}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { marginTop: 25 }]} activeOpacity={0.8} onPress={goToScanBarCode}>
        <Text style={[styles.text, styles.buttontext]}>{Strings.scan_barcode}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { marginTop: 25 }]} activeOpacity={0.8} onPress={goToHistory}>
        <Text style={[styles.text, styles.buttontext]}>{Strings.history}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.black,
  },
  button: {
    backgroundColor: Colors.primary,
    width: '70%',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },
  buttontext: {
    color: Colors.white,
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
  }
})