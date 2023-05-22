import Footer from "./styles";

import React from "react";

export default () => {
  return (
    <Footer>
      <p>
        Desenvolvido e mantido por{" "}
        <a href="https://orango.io" target="_blank" rel="noopener noreferrer">
          ORANGO I/O TECNOLOGIA
        </a>
        . Por{" "}
        <a
          href="https://filipelopes.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Filipe Lopes
        </a>
        ,{" "}
        <a
          href="https://filipelopes.med.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Médico
        </a>
        <br />
        Hospital Maternidade Luís Eduardo Magalhães CNES 2602202 <br />
        Av. Antônio Sérgio Carneiro, S/N - Centro. Agua Fria/BA <br />
        CNPJ 13.606.702/0001-65
      </p>
    </Footer>
  );
};
