import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

// import { AuthProvider } from '../../contexts/AuthProvider';
import { Grid } from '../Grid';
import * as C from './styles'

export const Transaction = ({ data }) => {
  const auth = useContext(AuthContext) // utilizar userLogin()
  const [type, setType] = useState('');


  const handleClick = async ({ target }) => {
    console.log(target.name);
    setType(target.name);
    await auth.getTransactions(target.name);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>Transações</C.HeaderTitle>
      </C.Header>
      <C.Filter>
        <C.Input type="date" />
        <C.Button onClick={handleClick} name='credited'>Entradas</C.Button>
        <C.Button onClick={handleClick} name='debited'>Saídas</C.Button>
      </C.Filter>
      <C.Hr />
      <Grid data={data} transaction={type}/>
    </C.Container>
  );
};
