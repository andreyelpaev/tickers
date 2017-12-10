import { makeTypes, postfixes } from '../constants/index';

export function makeActions(prefix, type) {
  const types = makeTypes(prefix, type);

  const REQUESTED = `${type}${postfixes.REQUESTED}`;
  const SUCCEED = `${type}${postfixes.SUCCEED}`;
  const FAILED = `${type}${postfixes.FAILED}`;

  const action = payload => ({
    type: types[type],
    payload
  });

  action.requested = payload => ({
    type: types[REQUESTED],
    payload
  });

  action.succeed = payload => ({
    type: types[SUCCEED],
    payload
  });

  action.failed = payload => ({
    type: types[FAILED],
    payload
  });

  return action;
}
