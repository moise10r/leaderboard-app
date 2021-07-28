/* eslint-disable import/prefer-default-export */
import * as Api from './api';

export const getGame = () => Api.get('games/Zl4d7IVkemOTTVg2fUdz/scores/');
export const createGame = (data) => {
  const reponse = Api.post('games/', JSON.stringify(data));
  return reponse;
};