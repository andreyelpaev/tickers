import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Name</Text>
        <Text>Last</Text>
        <Text>Highest Bid</Text>
        <Text>Precent Change</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16
  }
});