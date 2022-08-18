import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GenerateBarcode from '../pages/GenerateBarcode';
import History from '../pages/History';
import ScanBarcode from '../pages/ScanBarcode';
import Welcome from '../pages/Welcome';

const Screens = {
    WelcomeScreen: {
        screen: Welcome,
        navigationOptions: {
            headerShown: false,
        },
    },
    GenerateBarcodeScreen: {
        screen: GenerateBarcode,
        navigationOptions: {
            headerShown: false,
        },
    },
    ScanBarcodeScreen: {
        screen: ScanBarcode,
        navigationOptions: {
            headerShown: false,
        },
    },
    HistoryScreen: {
        screen: History,
        navigationOptions: {
            headerShown: false,
        },
    },
};

const Stack = createStackNavigator(Screens);

export default createAppContainer(Stack);