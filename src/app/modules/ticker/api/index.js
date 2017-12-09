
export function fetchTicker(payload) {
  return fetch('https://poloniex.com/public?command=returnTicker')
    .then(response => response.json())
    .then(json => json);
}
