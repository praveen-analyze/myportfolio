import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const submitContact = (payload) => api.post('/contact', payload);
export const getProjects = (category) =>
  api.get('/projects', { params: category && category !== 'all' ? { category } : {} });

export default api;
