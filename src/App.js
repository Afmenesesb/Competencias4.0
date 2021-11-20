import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from './Componentes/Cabecera';
import { useAuth0 } from '@auth0/auth0-react';
import CabeceraHome from './Componentes/CabeceraHome';
import CabeceraGestor from './Componentes/CabeceraGestor';


function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <CabeceraGestor/>
          

        </>
      ) : (
      <Cabecera/>
      )}
      
    </div>
  );
}

export default App;
