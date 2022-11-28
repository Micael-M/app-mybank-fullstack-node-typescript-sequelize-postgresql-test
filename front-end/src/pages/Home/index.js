import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Section } from './styles';
import { Header } from '../../components/Header'
import { Resume } from '../../components/Resume';
import { Transaction } from '../../components/Transaction';

const Home = () => {
  const auth = useContext(AuthContext) // utilizar userLogin()
  const handleLogout = () => auth.userLogout();

  return (
    <>
      <Section>
        <Header />
        <Resume />
        <Transaction data={auth.transactions}/>
        {auth.user && <button name="btn_signout" onClick={handleLogout}>Sair</button>}
      </Section>
    </>
  )
}

export default Home
