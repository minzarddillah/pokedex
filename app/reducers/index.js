import {combineReducers} from 'redux';

import homeReducer from './homeReducer';
import DetailListPokemonReducer from './DetailListPokemonReducer';

export default combineReducers({
  homeReducer,
  DetailListPokemonReducer,
});
