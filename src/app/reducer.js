import { combineReducers } from 'redux';
import ticker from 'src/app/modules/ticker/reducers';

const reducer = combineReducers({
  main: combineReducers({
    ticker
  })
});

export default reducer;
