import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3002`
});

export const useApi = () => ({
  userLogin: async (username, password) => {
    const { data } = await api.post('/login', {username, password});
    return data;
  },

  userRegister: async (username, password) => {
    const { data } = await api.post('/register', {username, password});
    return data;
  },

  validateToken: async (token) => {
    const { data } = await api.post('/validate', {token});
    return data;
  },

  getTransactions: async (id, who) => {
    console.log(id, who);
    const { data } = await api.post('/transactions', {id, who});
    console.log(data);
    return data;
  },

  createTransaction: async (debitedAccountId, creditedName, value) => {
    const resultCreate = await api.post('/transaction', {debitedAccountId, creditedName, value});
    return resultCreate;
  },
});
