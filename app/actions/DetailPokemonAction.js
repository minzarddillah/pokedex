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
} from './actionType';
import axios from '../utils/axios';

export const requestDetailPokemon = async ({id, speciesName}, dispatch) => {
  dispatch({
    type: GET_DETAIL_POKEMON,
  });

  try {
    const [detail, species] = await Promise.all([
      axios.get(`pokemon/${id}`),
      axios.get(`pokemon-species/${speciesName}`),
    ]);
    dispatch({
      type: GET_DETAIL_POKEMON_SUCCESS,
      payload: {
        detail: detail.data,
        species: species.data,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_DETAIL_POKEMON_FAILED,
      error: error.response,
    });
  }
};

export const requestListCompare = async dispatch => {
  dispatch({
    type: GET_LIST_COMPARE,
  });

  try {
    const response = await axios.get('/pokemon?offset=0&limit=15');

    const listOfPokemon = [];
    for (let i = 0; i < response.data.results.length; i++) {
      const element = response.data.results[i];
      listOfPokemon.push(axios.get(`/pokemon/${element.name}`));
    }
    const values = await Promise.all(listOfPokemon);

    dispatch({
      type: GET_LIST_COMPARE_SUCCESS,
      payload: {
        data: values.map(({data}) => data),
        offset: 15,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_LIST_COMPARE_FAILED,
      error: error.response,
    });
  }
};

export const requestPagingListCompare = async (offset, dispatch) => {
  dispatch({
    type: GET_LIST_COMPARE_PAGING,
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
      type: GET_LIST_COMPARE_PAGING_SUCCESS,
      payload: {
        data: listOfPokemon,
        offset: offset + 15,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_LIST_COMPARE_PAGING_FAILED,
      error: error.response,
    });
  }
};

export const requestComparePokemon = async ({id, speciesName}, dispatch) => {
  try {
    const [detail, species] = await Promise.all([
      axios.get(`pokemon/${id}`),
      axios.get(`pokemon-species/${speciesName}`),
    ]);
    dispatch({
      type: GET_COMPARE_POKEMON_SUCCESS,
      payload: {
        detail: detail.data,
        species: species.data,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_COMPARE_POKEMON_FAILED,
      error: error.response,
    });
  }
};
