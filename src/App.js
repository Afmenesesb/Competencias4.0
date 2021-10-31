import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from './Componentes/Cabecera';
import Home from './Componentes/Home';
import { LoginButton } from './Componentes/Login';
import { LogoutButton } from './Componentes/Logout';
import { Profile } from './Componentes/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import CabeceraHome from './Componentes/CabeceraHome';


function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <CabeceraHome/>
          

        </>
      ) : (
      <Cabecera/>
      )}
      
    </div>
  );
}

export default App;
