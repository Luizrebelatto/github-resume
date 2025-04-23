import axios from 'axios';

const api = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  }
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
