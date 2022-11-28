import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
// import * as C from './styles';
// import { Button } from "../../components/Button";

export const Login = () => {

  const auth = useContext(AuthContext); // utilizar userLogin()

  console.log('Cheguei no Login');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidden, setHidden] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    name === 'username' ? setUsername(value) : setPassword(value);
  };

  const handleLogin = async () => {
    try {
      if (username && password) {
        const isLogged = await auth.userLogin(username, password);
        console.log(isLogged);
      }
    } catch {
      return setHidden(false);
    }
  };

  useEffect(() => {
    const minLengthUsername = 3;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

    if (passwordRegex.test(password)
      && username.length >= minLengthUsername
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [username, password]);

  return (
    <section className="main-login">
      <h2>Entrar</h2>
      <input
        name="username"
        onChange={handleChange}
        placeholder="Usuário"
        type="text"
        value={username}
      />
      <input
        name="password"
        onChange={handleChange}
        placeholder="Senha"
        type="password"
        value={password}
      />
      <p hidden={hidden}>Se o usuário existir, as credenciais estão incorrretas!</p>
      <button
        disabled={disabled}
        onClick={handleLogin}>
        Login
      </button>

    </section>
  );
}
