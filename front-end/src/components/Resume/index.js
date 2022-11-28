import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Balance } from '../ResumeBalance';
import { Transfer } from '../ResumeTransfer';
import * as C from './styles'

export const Resume = () => {
  const { user } = useContext(AuthContext);
  console.log('No resume, dados do usuário');
  console.log(user.username);
  return (
    <C.Container>
      <Balance title={'Saldo'} value={1000}/>
      <Transfer title={'Transferir'} type="text" placeholder="0,00"/>      
    </C.Container>
  );
};
