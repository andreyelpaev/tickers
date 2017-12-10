import React from 'react';
import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import screens from './navigation/screens';
import store from './store';


const Tab = TabNavigator(screens);

const Container = () => (
  <Provider store={store}>
    <Tab />
  </Provider>
);

function startApp() {
  AppRegistry.registerComponent('poloniex', () => Container);
}

startApp();

