import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_GITHUB_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.VUE_GITHUB_TOKEN}`
  },
  
});

export default {
  getUserRepo(username) {
    return api.get(`/users/${username}/repos`);
  },
}