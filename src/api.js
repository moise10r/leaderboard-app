/* eslint-disable import/prefer-default-export */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
export const get = async (endPoint) => {
  const result = await fetch(`${url}${endPoint}`);
  return result.json();
};

export const post = async (endPoint, body) => {
  const result = await fetch(`${url}${endPoint}`, {
    method: 'POST',
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return result.json();
};