/* eslint-disable import/prefer-default-export */
import * as Api from './api';

export const createGame = async (name) => {
  const { result } = await Api.post('games/', JSON.stringify({ name }));
  return result;
};

export const getGames = async (id) => {
  const { result } = await Api.get(`games/${id}/scores/`);
  return result;
};

export const submitScore = async (data, id) => {
  const { result } = await Api.post(`games/${id}/scores/`, JSON.stringify(data));
  return result;
};
