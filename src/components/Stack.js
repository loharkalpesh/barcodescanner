import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../pages/Welcome';

const Screens = {
    WelcomeScreen: {
        screen: Welcome,
        navigationOptions: {
            headerShown: false,
        },
    },
};

const Stack = createStackNavigator(Screens);

export default createAppContainer(Stack);