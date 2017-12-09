import _ from 'lodash';

export function generate({ prefix, types, separator = ':' }) {
  const generated = [];

  _.map(types, (type) => {
    generated[type] = `${prefix}${separator}${type}`;
  });

  return generated;
}
