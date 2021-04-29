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
} from './actionType';
import axios from '../utils/axios';

export const getDetailListPokemon = (type, dispatch) => {
  return new Promise(async (resolve, reject) => {
    dispatch({
      type: GET_DETAIL_LIST_POKEMON,
    });

    try {
      let dataPokemon = [];
      if (type) {
        const {data} = await axios.get(`/type/${type}`);
        dataPokemon = data.pokemon;
      } else {
        const {data} = await axios.get('/pokemon?offset=0&limit=15');
        dataPokemon = data.results;
      }

      const listOfPokemon = [];
      for (let i = 0; i < dataPokemon.length; i++) {
        const element = dataPokemon[i];
        listOfPokemon.push(
          axios.get(`/pokemon/${type ? element.pokemon.name : element.name}`),
        );
      }

      const values = await Promise.all(listOfPokemon);

      dispatch({
        type: GET_DETAIL_LIST_POKEMON_SUCCESS,
        payload: {
          data: values.map(({data}) => data),
          offset: 15,
        },
      });
      resolve();
    } catch (error) {
      dispatch({
        type: GET_DETAIL_LIST_POKEMON_FAILED,
        error: error.response,
      });
      reject();
    }
  });
};

export const requestPagingDetailList = (offset, dispatch) => {
  return new Promise(async (resolve, reject) => {
    dispatch({
      type: GET_PAGING_LIST_POKEMON,
    });
    try {
      const {data} = await axios.get(`/pokemon?offset=${offset}&limit=15`);
      const listOfPokemon = [];

      for (let i = 0; i < data.results.length; i++) {
        const element = data.results[i];
        const pokemon = await axios.get(`/pokemon/${element.name}`);
        listOfPokemon.push(pokemon.data);
      }

      dispatch({
        type: GET_PAGING_LIST_POKEMON_SUCCESS,
        payload: {
          data: listOfPokemon,
          offset: offset + 15,
        },
      });
      resolve();
    } catch (error) {
      dispatch({
        type: GET_PAGING_LIST_POKEMON_FAILED,
        error: error.response,
      });
      reject();
    }
  });
};

export const getListFilter = async dispatch => {
  dispatch({
    type: GET_LIST_FILTER,
  });

  try {
    const {data} = await axios.get('/type');
    dispatch({
      type: GET_LIST_FILTER_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: GET_LIST_FILTER_FAILED,
      error: error.response,
    });
  }
};
