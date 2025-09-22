import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Your NestJS API
});

export default api;
