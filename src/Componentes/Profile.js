import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './../Estilos/home.css';

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div id="menu">
        <img id="imagenperfil"src={user.picture} class="imgP"/>
        <h6 id="usuario">{user.given_name.charAt(0)}<h7 id="nombreUsuario">{user.given_name.substring(1)}</h7></h6>
        <h6 id="email">{user.email}</h6>
      </div>
    )
  );
};