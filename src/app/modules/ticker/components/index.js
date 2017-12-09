import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ticker } from '../actions';
import ListItem from './listItem';
import Header from './header';


class Ticker extends Component {

  componentDidMount() {
    const { ticker } = this.props;
    ticker();
  }


  render() {
    const { tickers } = this.props;

    const renderItem = ({ item, index }) => (
      <ListItem item={item} index={index} />
    );

    return (
      <View style={styles.container}>
        <FlatList
          data={tickers}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
          ListHeaderComponent={<Header />}
        />
      </View>
    );
  }
}

const TickerContainer = connect(
  (state) => {
    const moduleState = state.main.ticker;

    const props = {
      ...moduleState
    };
    return props;
  },
  dispatch => bindActionCreators({ ticker }, dispatch),
)(Ticker);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default TickerContainer;
