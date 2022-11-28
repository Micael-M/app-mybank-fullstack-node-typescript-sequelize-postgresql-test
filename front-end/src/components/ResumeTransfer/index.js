import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as C from './styles'

export const Transfer = ({ title, type, placeholder }) => {
  const auth = useContext(AuthContext) // utilizar userLogin()
  // const [value, setValue] = useState(0);

  const handleChange = ({ target }) => {
  };

  const handleClick = async ({ target }) => {
    await auth.createTransaction
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
      </C.Header>
      <C.Transfer>
        <C.Input width={35} onChange={handleChange} type={type} placeholder={placeholder} />
        <C.Input width={60} onChange={handleChange} type={"text"} placeholder={"Nome do usuário"} />
      </C.Transfer>
      <C.Button onClick={handleClick}>Enviar</C.Button>
    </C.Container>
  );
};
