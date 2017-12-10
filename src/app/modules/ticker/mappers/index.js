import _ from 'lodash';

export function mapTickers(payload) {
  return _.reduce(payload, (mapped, value, key) => {
    mapped.push({ ...value, key });
    return mapped;
  }, []);
}
