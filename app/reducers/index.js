import {combineReducers} from 'redux';

import homeReducer from './homeReducer';
import DetailPokemonReducer from './DetailPokemonReducer';
import DetailListPokemonReducer from './DetailListPokemonReducer';

export default combineReducers({
  homeReducer,
  DetailPokemonReducer,
  DetailListPokemonReducer,
});
