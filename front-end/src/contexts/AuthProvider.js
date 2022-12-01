import { useContext, useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';
import { AuthContext } from './AuthContext';


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dataUser, setDataUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setisLoading] = useState([]);
  const api = useApi();

  const tokenValidate = async () => {
    console.log('No tokenValidate');
    const getStorageToken = JSON.parse(localStorage.getItem('mc_token'));
    const getUserStorage = JSON.parse(localStorage.getItem('mc_user'));
    if (getStorageToken) {
      setUser(getStorageToken);
      setDataUser(getUserStorage)
      
      const validateToken = await api.validateToken(getStorageToken);
      console.log(validateToken.username);
      if (validateToken.username) setUser(validateToken);
    }
  };

  useEffect(() => { 
    console.log('Rodei useEffect do provider');
    tokenValidate() }, []);

  // const setTokenInStorage = (token) => localStorage.setItem('mc_token', JSON.stringify(token));
  // const setUserInStorage = (token) => localStorage.setItem('mc_user', JSON.stringify(token));
  const setIDataInStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));


  const userLogin = async (username, password) => {
    const userData = await api.userLogin(username, password);
    if (userData) {
      setIDataInStorage('mc_token', userData.token);
      setIDataInStorage('mc_user', userData);
      setUser(userData.token);
      setDataUser(userData)
      return true;
    };
    return false;
  }

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('mc_token');
    localStorage.removeItem('mc_user');
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
    const resultCreate = await api.createTransaction(idDebited, credited, value);
    console.log('transferencia com sucesso');
    return resultCreate;
  };


  return (
    <AuthContext.Provider value={{
      user,
      dataUser,
      transactions,
      userLogin,
      userLogout,
      getTransactions,
      createTransaction,
    }}> {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);
