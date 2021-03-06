import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigator from './src/Navigation/Navigator'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
