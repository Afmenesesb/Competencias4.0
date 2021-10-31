import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../Estilos/boton.css';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button class="btnlogout" onClick={() => logout({ returnTo: window.location.origin })}>
      Cerrar sesion
    </button>
  );
};