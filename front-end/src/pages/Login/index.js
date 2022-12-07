import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";

export const Login = () => {

  const auth = useAuth();

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
        await auth.userLogin(username, password);
        return;
      }
    } catch {
      setHidden(false);
      return;
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
