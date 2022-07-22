import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecera from './Componentes/Cabecera';
import { useAuth0 } from '@auth0/auth0-react';
import CabeceraHome from './Componentes/CabeceraHome';
import CabeceraGestor from './Componentes/CabeceraGestor';


export const Salir = () => {
  const { logout } = useAuth0();

  return (
    <button class="btn btn-danger" onClick={() => logout({ returnTo: window.location.origin })}>
      SALIR
    </button>
  );
};
function verificarDominio(dominio) {
  if (dominio.includes('uqvirtual')) {
    return true;
  }
  else {
    return false;
  }
}
function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) return <h1 id="cargando">Cargando...</h1>

  if (isAuthenticated) {
    if (user.email.includes('uqvirtual')) {
      return (
        <div className="App">
          {isAuthenticated ? (

            <CabeceraHome />



          ) : (

            <Cabecera />

          )}

        </div>

      );

    }
    else {
      if (user.email.includes('gmail')) {
        return (
          <div className="App">
            {isAuthenticated ? (

              <CabeceraGestor />


            ) : (

              <Cabecera />

            )}

          </div>

        );

      }
      else {
        return (
          <div className="App">

            <h1>NO TIENE ACCESO A LA PAGINA WEB</h1>
            <Salir />

          </div>


        );
      }

    }

  }
  else {
    return (
      <div className="App">
        {isAuthenticated ? (

          <Cabecera />

        ) : (

          <Cabecera />

        )}

      </div>

    );



  }


}

export default App;
