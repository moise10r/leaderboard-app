/* eslint-disable import/prefer-default-export */
import * as Api from './api';

export const createGame = async (data) => {
  const { result } = await Api.post('games/', JSON.stringify(data));
  return result;
};

export const getId = (id) => id.split(' ')[3];

export const getGame = () => Api.get('games/Zl4d7IVkemOTTVg2fUdz/scores/');