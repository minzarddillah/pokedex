// import get from 'lodash/get';

import {
  GET_LIST_POKEMON,
  GET_LIST_POKEMON_SUCCESS,
  GET_LIST_POKEMON_FAILED,
} from './actionType';
import axios from '../utils/axios';
// import { ERROR_CODE } from '../utils/constants';
// import { queryObjectToString } from '../utils/helper';

export const requestListPokemon = dispatch => {
  const callback = async (resolve, reject) => {
    dispatch({
      type: GET_LIST_POKEMON,
    });

    try {
      const {data} = await axios.get('pokemon?limit=10&offset=0');
      const listOfPokemon = [];

      for (let i = 0; i < data.results.length; i++) {
        const element = data.results[i];
        const pokemon = await requestDetailPokemon(element);
        listOfPokemon.push(pokemon);
      }
    } catch (error) {
      // console.log(error);
      // console.log(error.response);
      // error.response.data
    }
  };
  return new Promise(callback);
};

const requestDetailPokemon = ({name}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.get(`pokemon/${name}`);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
