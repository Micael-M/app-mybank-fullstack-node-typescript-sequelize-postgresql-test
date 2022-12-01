import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthProvider';
import * as C from './styles'

export const Transfer = ({ title, type, placeholder }) => {
  const auth = useAuth() // utilizar userLogin()
  const [value, setValue] = useState(0);
  const [creditedName, setCreditedName] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    name === 'username' ? setCreditedName(value) : setValue(value);
  };

  const handleClick = async () => {
    console.log(auth.dataUser.id, creditedName, value);
    // console.log(auth.dataUser.id , creditedName, value);
    await auth.createTransaction(auth.dataUser.id , creditedName, value);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
      </C.Header>
      <C.Transfer>
        <C.Input width={35} onChange={handleChange} type={type} placeholder={placeholder} name="value"/>
        <C.Input width={60} onChange={handleChange} type={"text"} placeholder={"Nome do usuário"} name="username"/>
      </C.Transfer>
      <C.Button onClick={handleClick}>Enviar</C.Button>
    </C.Container>
  );
};
