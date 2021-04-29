import {
  GET_LIST_POKEMON,
  GET_LIST_POKEMON_SUCCESS,
  GET_LIST_POKEMON_FAILED,
  GET_TYPE_POKEMON,
  GET_TYPE_POKEMON_SUCCESS,
  GET_TYPE_POKEMON_FAILED,
} from './actionType';
import axios from '../utils/axios';

const requestDetailPokemon = ({name}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [detail, species] = await Promise.all([
        axios.get(`/pokemon/${name}`),
        axios.get(`/pokemon-species/${name}`),
      ]);
      resolve({...detail.data, ...species.data});
    } catch (error) {
      reject(error);
    }
  });
};

export const requestListPokemon = async dispatch => {
  dispatch({
    type: GET_LIST_POKEMON,
  });

  try {
    const {data} = await axios.get('/pokemon?limit=5&offset=0');
    const promiseListOfPokemon = [];

    for (let i = 0; i < data.results.length; i++) {
      const element = data.results[i];
      const pokemon = requestDetailPokemon(element);
      promiseListOfPokemon.push(pokemon);
    }

    const listOfPokemon = await Promise.all(promiseListOfPokemon);

    dispatch({
      type: GET_LIST_POKEMON_SUCCESS,
      payload: listOfPokemon,
    });
  } catch (error) {
    dispatch({
      type: GET_LIST_POKEMON_FAILED,
      error: error.response,
    });
  }
};

export const requstTypePokemon = async dispatch => {
  dispatch({
    type: GET_TYPE_POKEMON,
  });

  try {
    const {data} = await axios.get('/type');
    dispatch({
      type: GET_TYPE_POKEMON_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: GET_TYPE_POKEMON_FAILED,
      error: error.response,
    });
  }
};
