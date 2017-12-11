// @flow

import Ticker from '../modules/ticker/components';
import Some from '../modules/some/components';

export default {
  Ticker: {
    screen: Ticker,
    navigationOptions: {
      tabBarLabel: 'Тикер'
    }
  },
  Some: {
    screen: Some,
    navigationOptions: {
      tabBarLabel: 'Ещё один компонент'
    }
  }
};

