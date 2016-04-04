import axios from 'axios';

const API_KEY = '28744ed5982391881611cca6cf5c240';
const API_URL = 'https://test.npe.auspost.com.au/api/postcode/search.json';

export const PERFORM_SEARCH = 'PERFORM_SEARCH';

export function fetchAddress(query) {
  const url = `${API_URL}?q=${query}`;
  const request = axios({
    url: url,
    method: 'GET',
    headers: { 'AUTH-KEY': API_KEY },
  });
  return {
    type: PERFORM_SEARCH,
    payload: request
  };
}
