import {
  GET_DETAIL_LIST_POKEMON,
  GET_DETAIL_LIST_POKEMON_SUCCESS,
  GET_DETAIL_LIST_POKEMON_FAILED,
  GET_PAGING_LIST_POKEMON,
  GET_PAGING_LIST_POKEMON_SUCCESS,
  GET_PAGING_LIST_POKEMON_FAILED,
  GET_LIST_FILTER,
  GET_LIST_FILTER_SUCCESS,
  GET_LIST_FILTER_FAILED,
} from '../actions/actionType';

const initialState = {
  loading: false,
  data: [],
  offset: 0,
  loadingPaging: false,
  loadingFilter: false,
  listFilter: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_LIST_POKEMON:
      return {
        ...state,
        loading: true,
        offset: 0,
      };
    case GET_DETAIL_LIST_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        offset: action.payload.offset,
      };
    case GET_DETAIL_LIST_POKEMON_FAILED:
      return {
        ...state,
        loading: false,
      };
    case GET_PAGING_LIST_POKEMON:
      return {
        ...state,
        loadingPaging: true,
      };
    case GET_PAGING_LIST_POKEMON_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload.data),
        offset: action.payload.offset,
        loadingPaging: false,
      };
    case GET_PAGING_LIST_POKEMON_FAILED:
      return {
        ...state,
        loadingPaging: false,
      };
    case GET_LIST_FILTER:
      return {
        ...state,
        loadingFilter: true,
        listFilter: [],
      };
    case GET_LIST_FILTER_SUCCESS:
      return {
        ...state,
        loadingFilter: false,
        listFilter: action.payload,
      };
    case GET_LIST_FILTER_FAILED:
      return {
        ...state,
        loadingFilter: false,
      };
    default:
      return state;
  }
};
