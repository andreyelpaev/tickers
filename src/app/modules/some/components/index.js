// @flow

import React, { Component } from 'react';
import { View } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Some extends Component {
  render() {
    return (
      <View />
    );
  }
}

const SomeContainer = connect(
  state => state,
  dispatch => bindActionCreators({}, dispatch),
)(Some);

export default SomeContainer;
