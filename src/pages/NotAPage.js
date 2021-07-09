import React from 'react';
import unplugIMG from '../assets/404-plug.gif';
import { Link } from 'react-router-dom';

const NotAPage = () => {
  return (
    <div className="NotAPage">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <img src={unplugIMG} />
      <p>
        Sentimos muito por sua página não ter sido encontrada.
      </p>
      <p>
        Por favor, volte para a página inicial.
      </p>
      <Link to="/">
        <button type="button">Voltar</button>
      </Link>
    </div>
  )
} 

export default NotAPage;
