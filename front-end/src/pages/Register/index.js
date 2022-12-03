import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AuthProvider } from './contexts/AuthProvider';
import { Global } from './styles/global';

const root = createRoot(document.querySelector('#root'));

root.render(
  <AuthProvider>
    <BrowserRouter>
      < Global />
      <App />
    </BrowserRouter>
  </AuthProvider>
);
