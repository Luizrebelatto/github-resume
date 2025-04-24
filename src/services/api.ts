import axios from 'axios';
import { TOKEN_GITHUB } from './variables';

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN_GITHUB}`
  },
  
});

export default {
  getUserRepo(username) {
    return api.get(`/users/${username}/repos`);
  },
}
