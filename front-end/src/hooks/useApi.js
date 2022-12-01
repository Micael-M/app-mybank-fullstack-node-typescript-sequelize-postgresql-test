import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3002`
});

export const useApi = () => ({
  userLogin: async (username, password) => {
    console.log('No axios, fazendo a requisição - userLogin');
    const { data } = await api.post('/login', {username, password});
    console.log('Voltou da requisição');
    return data;
  },

  userRegister: async (username, password) => {
    const { data } = await api.post('/register', {username, password});
    return data;
  },

  validateToken: async (token) => {
    console.log('No validate token');
    const { data } = await api.post('/validate', {token});
    console.log('Passou da validate token');
    return data;
  },

  getTransactions: async (id, who) => {
    console.log('No getTransactions');
    const { data } = await api.post('/transactions', {id, who});
    console.log('Passou da getTransactions');
    return data;
  },

  createTransaction: async (debitedAccountId, creditedName, value) => {
    console.log('No createTransaction');
    const resultCreate = await api.post('/transaction', {debitedAccountId, creditedName, value});
    return resultCreate;
  },
});