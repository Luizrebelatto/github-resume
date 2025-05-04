import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.VITE_APP_TOKEN_GITHUB}`
  },
  
});

export default {
  getUserRepo(username) {
    return api.get(`/users/${username}/repos`);
  },
}