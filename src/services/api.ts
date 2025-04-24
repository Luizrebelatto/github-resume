import axios from 'axios';
import { TOKEN_GITHUB } from './variables';

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN_GITHUB}`
  },
  
});

export default {
  get(endpoint) {
    return api.get(endpoint);
  },

  post(endpoint, data) {
    return api.post(endpoint, data);
  },

  put(endpoint, data) {
    return api.put(endpoint, data);
  },

  delete(endpoint) {
    return api.delete(endpoint);
  }
}
