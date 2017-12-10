import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class extends PureComponent {
  render() {
    const { item, index } = this.props;
    const {
      key, last, highestBid, percentChange
    } = item;

    const percent = parseFloat(percentChange * 100).toPrecision(4);

    const colorStyle = () => (percent >= 0 ? { color: 'green' } : { color: 'red' });

    return (
      <View style={styles.container} key={index}>
        <Text style={styles.key}>{key}</Text>
        <Text>{last}</Text>
        <Text>{highestBid}</Text>
        <Text style={StyleSheet.flatten([colorStyle(), styles.percent])}>
          {percent} %
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc'
  },
  key: {
    color: 'rgba(0, 0, 0, .87)',
    fontFamily: 'sans-serif-medium'
  },
  percent: {
    fontWeight: 'bold'
  }
});
