// import React, { useEffect, useState } from 'react';
import { Section } from './styles';
import { Header } from '../../components/Header'
import { Resume } from '../../components/Resume';
import { Transaction } from '../../components/Transaction';
import { useAuth } from '../../contexts/AuthProvider';

const Home = () => {
  // const [userData, setUserData] = useState(null);

  const auth = useAuth();
  const handleLogout = () => auth.userLogout();
  console.log('No effect home');


  // useEffect(() => {
  //   console.log('No effect home');
  //   const getUserInStorage = localStorage.getItem('mc_user');
  //   setUserData(JSON.parse(getUserInStorage));
  //   console.log(userData);
  // }, [auth.dataUser]);

  return (
    <>
      <Section>
        <Header />
        <Resume userData={auth.dataUser} />
        <Transaction data={auth.transactions} />
        {auth.user && <button name="btn_signout" onClick={handleLogout}>Sair</button>}
      </Section>
    </>
  )
}

export default Home
