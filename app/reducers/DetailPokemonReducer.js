import {
  GET_DETAIL_POKEMON,
  GET_DETAIL_POKEMON_SUCCESS,
  GET_DETAIL_POKEMON_FAILED,
  GET_LIST_COMPARE,
  GET_LIST_COMPARE_SUCCESS,
  GET_LIST_COMPARE_FAILED,
  GET_LIST_COMPARE_PAGING,
  GET_LIST_COMPARE_PAGING_SUCCESS,
  GET_LIST_COMPARE_PAGING_FAILED,
  GET_COMPARE_POKEMON_SUCCESS,
  GET_COMPARE_POKEMON_FAILED,
} from '../actions/actionType';

const initialState = {
  loading: false,
  data: [],

  pokedex: [],
  offset: 0,
  loadingPokedex: false,
  loadingPagingPokedex: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_POKEMON:
      return {
        ...state,
        loading: true,
        data: [],
      };
    case GET_DETAIL_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [
          {
            ...action.payload.detail,
            ...action.payload.species,
          },
        ],
      };
    case GET_DETAIL_POKEMON_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
      };
    case GET_LIST_COMPARE:
      return {
        ...state,
        pokedex: [],
        offset: 0,
        loadingPokedex: true,
      };
    case GET_LIST_COMPARE_SUCCESS:
      return {
        ...state,
        pokedex: action.payload.data,
        offset: action.payload.offset,
        loadingPokedex: false,
      };
    case GET_LIST_COMPARE_FAILED:
      return {
        ...state,
        loadingPokedex: false,
      };
    case GET_LIST_COMPARE_PAGING:
      return {
        ...state,
        loadingPagingPokedex: true,
      };
    case GET_LIST_COMPARE_PAGING_SUCCESS:
      return {
        ...state,
        loadingPagingPokedex: false,
        pokedex: state.pokedex.concat(action.payload.data),
        offset: action.payload.offset,
      };
    case GET_LIST_COMPARE_PAGING_FAILED:
      return {
        ...state,
        loadingPagingPokedex: false,
      };
    case GET_COMPARE_POKEMON_SUCCESS:
      return {
        ...state,
        data: [
          state.data[0],
          {
            ...action.payload.detail,
            ...action.payload.species,
          },
        ],
      };
    default:
      return state;
  }
};
