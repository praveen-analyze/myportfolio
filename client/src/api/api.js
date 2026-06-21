import axios from 'axios';

const rawBase = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const normalizedBase = rawBase.replace(/\/$/, '').replace(/\/api$/, '');

const api = axios.create({
  baseURL: `${normalizedBase}/api`,
});

export const submitContact = (payload) => api.post('/contact', payload);
export const getProjects = (category) =>
  api.get('/projects', { params: category && category !== 'all' ? { category } : {} });

export default api;
