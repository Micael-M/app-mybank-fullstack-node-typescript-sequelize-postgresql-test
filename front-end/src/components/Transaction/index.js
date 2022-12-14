import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider';
import { Grid } from '../Grid';
import * as C from './styles'

export const Transaction = ({ data }) => {
  const auth = useAuth();
  const [type, setType] = useState('');

  const handleClick = async ({ target }) => {
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
