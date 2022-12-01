import { Balance } from '../ResumeBalance';
import { Transfer } from '../ResumeTransfer';
import * as C from './styles'

export const Resume = ({ data }) => {
  return (
    <C.Container>
      <Balance title={'Saldo'} value={(data / 100).toFixed(2)}/>
      <Transfer title={'Transferir'} type="text" placeholder="0.00"/>
    </C.Container>
  );
};
