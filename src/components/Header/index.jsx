import Header from "./styles";

import { ReactComponent as LogoSVG } from "assets/logo_hmlem_plain.svg";

import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Header>
      <div>
        <Link to="/">
          <LogoSVG />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/documentos">Documentos</Link>
          </li>
          <li>
            <Link to="/protocolos">Fluxogramas/Protocolos</Link>
          </li>
          <li>
            <Link to="/checklists">Checklists</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
};
