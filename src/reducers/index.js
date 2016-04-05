import { combineReducers } from 'redux';
import WikiReducer from './reducer_wiki';

const rootReducer = combineReducers({
  wiki: WikiReducer
});

export default rootReducer;
