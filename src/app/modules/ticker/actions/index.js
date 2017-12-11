// @flow

import types, { PREFIX } from '../constants/types';
import requestsFactory from 'src/app/utils/factories/requestsFactory';

export function setData(payload: Object) {
  return {
    type: types.SET_DATA,
    payload
  };
}
export const ticker = requestsFactory.makeActions(PREFIX, 'FETCH_DATA');
