import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider';
import * as C from './styles'

export const Transfer = ({ title, type, placeholder, data }) => {
  const auth = useAuth() 
  const [amount, setAmount] = useState(0);
  const [creditedName, setCreditedName] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    name === 'username' ? setCreditedName(value) : setAmount(value);
  };

  const handleClick = async () => {
    if (amount > 0 && amount <= data.balance && creditedName !== data.username && creditedName.length > 0) {
      await auth.createTransaction(data.id, creditedName, amount);
      return;
    }
    alert('Não foi possível fazer a transferência!');
  };
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
      </C.Header>
      <C.Transfer>
        <C.Input width={35} onChange={handleChange} type={type} placeholder={placeholder} name="value" />
        <C.Input width={60} onChange={handleChange} type={"text"} placeholder={"Nome do usuário"} name="username" />
      </C.Transfer>
      <C.Button onClick={handleClick}>Enviar</C.Button>
    </C.Container>
  );
};
