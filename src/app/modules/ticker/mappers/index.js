import _ from 'lodash';

export function mapTickers(payload) {
  const mapped = [];

  _.mapKeys(payload, (value, key) => {
    const tick = {
      ...value,
      key
    };

    mapped.push(tick);
  });
  return mapped;
}
