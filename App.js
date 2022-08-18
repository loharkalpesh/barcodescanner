import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Colors from './src/utils/Colors';
import Stack from './src/components/Stack';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  }
})

export default App;