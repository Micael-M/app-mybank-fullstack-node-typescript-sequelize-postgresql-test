import { Section } from './styles';
import { Header } from '../../components/Header'
import { Resume } from '../../components/Resume';
import { Transaction } from '../../components/Transaction';
import { useAuth } from '../../contexts/AuthProvider';

const Home = () => {

  const auth = useAuth();
  const handleLogout = () => auth.userLogout();

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
