import AsyncStorage from '@react-native-community/async-storage';

// @flow
const API_KEY = '0e2a751704a65685eefc'; //'23567b218376f79d9415'; // other valid API keys: '760b5fb497225856222a', '0e2a751704a65685eefc'
const API_ENDPOINT = 'http://interview.agileengine.com'; //'http://interview.agileengine.com'; // 'http://195.39.233.28:8035';// http://interview.agileengine.com

const setToken = async (token = '') => AsyncStorage.setItem('token', token);
const getToken = async () => AsyncStorage.getItem('token');

const getJson = (url, token = '') => {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  }).then((r) => r.json());
};

export async function signIn() {
  const response = await fetch(`${API_ENDPOINT}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: {
      apiKey: API_KEY,
    },
  });
  const result = await response.json();
  console.warn(response, result);
  setToken(result.token);
  return result.token;
}

export async function getPictures(page: number = 1): Array<Object> {
  const token = await getToken();
  try {
    return getJson(`${API_ENDPOINT}/images?page=${page}`, token);
  } catch (e) {
    await signIn();
    return getJson(`${API_ENDPOINT}/images?page=${page}`, await getToken());
  }
}

export async function getPictureDetails(id: number): Object {
  const token = await getToken();
  try {
    return getJson(`${API_ENDPOINT}/images/${id}`, token);
  } catch (e) {
    await signIn();
    return getJson(`${API_ENDPOINT}/images/${id}`, await getToken());
  }
}
