import { Balance } from '../ResumeBalance';
import { Transfer } from '../ResumeTransfer';
import * as C from './styles'

export const Resume = ({ userData }) => {

  const userBalance = userData.balance;

  return (
    <C.Container>
      <Balance title={'Saldo'} value={(userBalance / 100).toFixed(2)}/>
      <Transfer data={userData} title={'Transferir'} type="text" placeholder="0.00"/>
    </C.Container>
  );
};
