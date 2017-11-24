import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './src/landing-screen/LandingScreen'

import MainScreen from './src/MainScreen/index'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
