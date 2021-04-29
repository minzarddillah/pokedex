import {
  GET_LIST_POKEMON,
  GET_LIST_POKEMON_SUCCESS,
  GET_LIST_POKEMON_FAILED,
  GET_TYPE_POKEMON,
  GET_TYPE_POKEMON_SUCCESS,
  GET_TYPE_POKEMON_FAILED,
} from '../actions/actionType';

const initialState = {
  listOfPokemon: [],
  loadingListOfPokemon: false,

  typesPokemon: [],
  loadingTypesPokemon: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_POKEMON:
      return {
        ...state,
        listOfPokemon: [],
        loadingListOfPokemon: true,
      };
    case GET_LIST_POKEMON_SUCCESS:
      return {
        ...state,
        listOfPokemon: action.payload,
        loadingListOfPokemon: false,
      };
    case GET_LIST_POKEMON_FAILED:
      return {
        ...state,
        listOfPokemon: [],
        loadingListOfPokemon: false,
      };
    case GET_TYPE_POKEMON:
      return {
        ...state,
        typesPokemon: [],
        loadingTypesPokemon: true,
      };
    case GET_TYPE_POKEMON_SUCCESS:
      return {
        ...state,
        typesPokemon: action.payload,
        loadingTypesPokemon: false,
      };
    case GET_TYPE_POKEMON_FAILED:
      return {
        ...state,
        typesPokemon: [],
        loadingTypesPokemon: false,
      };
    default:
      return state;
  }
};
