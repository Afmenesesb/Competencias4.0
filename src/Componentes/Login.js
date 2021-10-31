import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../Estilos/boton.css';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} class="btnLog">Iniciar sesion</button>;
};