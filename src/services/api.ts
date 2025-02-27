import axios from 'axios';

const API_URL = import.meta.env.DRAGCAVE_API_URL || '';

export const fetchWithAuth = async (endpoint: string, token: string) => {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};

export const fetchUserData = async (token: string) => {
  return fetchWithAuth('/me', token);
}

export const fetchDragonData = async (username: string, token: string) => {
  return fetchWithAuth('/user?username='+username, token);
};