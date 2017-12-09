import { generate } from 'src/app/utils/typesGenerator';
import requestsFactory from 'src/app/utils/factories/requestsFactory';

export const PREFIX = 'TICKER';
const types = {
  ...generate({
    prefix: PREFIX,
    types: [
      'SET_DATA'
    ]
  }),
  ...requestsFactory.makeTypes(PREFIX, 'FETCH_DATA')
};

export default types;