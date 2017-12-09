import { combineReducers } from 'redux';

import types, { PREFIX } from '../constants/types';

import extend from 'src/app/utils/extendReducer';
import requestsFactory from 'src/app/utils/factories/requestsFactory';

import { mapTickers } from '../mappers';


const defaultState = {
  tickers: []
};


function setData(state, action) {
  const { payload } = action;


  return {
    ...state,
    tickers: mapTickers(payload)

  };
}

const reducer = (state = defaultState, action) => {
  const handler = {
    [types.SET_DATA]: setData
  }[action.type];

  if (!handler) return state;

  return handler(state, action);
};

export default extend(reducer, {
  requests: combineReducers({
    ticker: requestsFactory.makeReducer(PREFIX, 'FETCH_DATA')
  })
});
