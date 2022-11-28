import { useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';
import { AuthContext } from './AuthContext';


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const api = useApi();

  useEffect(() => {
    const tokenValidate = async () => {
      console.log('No userEffect');
      const getStorageToken = localStorage.getItem('mb_token');

      if (getStorageToken) {
        const validateToken = await api.validateToken(getStorageToken);
        if (validateToken.username) setUser(validateToken);
      }
    };
    tokenValidate();
  }, []);

  const setTokenInStorage = (token) => localStorage.setItem('mb_token', JSON.stringify(token));

  const userLogin = async (username, password) => {
    console.log('Cheguei no provider userLogin');
    const userData = await api.userLogin(username, password);
    console.log(userData);
    if (userData) {
      setUser(userData);
      console.log(typeof (userData.token));
      setTokenInStorage(userData.token);
      return true;
    };
    return false;
  }

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('mb_token');
  };

  const getTransactions = async (who) => {
    const resultFindAll = await api.getTransactions(user.id, who);
    if (resultFindAll) setTransactions(resultFindAll);
    console.log('Provider - getTransactions');
    console.log('Provider - getTransactions');
    return resultFindAll;
  };

  const createTransaction = async (idDebited, credited, value) => {
    console.log('No createTramsaction');
    const resultCreate = await api.post('/transaction', {idDebited, credited, value});
    console.log('transferencia com sucesso');
    return resultCreate;
  };
  return (
    <AuthContext.Provider value={{
      user,
      transactions,
      userLogin,
      userLogout, 
      getTransactions,
      createTransaction,
    }}> {children}
    </AuthContext.Provider>
  )
};
