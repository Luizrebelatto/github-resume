import axios from 'axios';

const api = axios.create({
  baseURL: process.env.TOKEN_GITHUB,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_BASE_URL}`
  },
  
});

export default {
  getUserRepo(username) {
    return api.get(`/users/${username}/repos`);
  },
}