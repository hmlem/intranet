import React from "react";

const news = [
  {
    title: "Cadastro do corpo clínico - Médicos",
    content: (
      <>
        <p>
          É de extrema importância que haja uma coesão da equipe e alinhamento
          de condutas, bem como discussão das mesmas para uma prática clínica
          mais eficiente na unidade, por isso solicitamos o cadastro do Corpo
          Clínico para otimizar a comunicação.
        </p>
        <p>Direção Clínica</p>
      </>
    ),
  },
  {
    title:
      "Artigo - Você sabia que a comunicação é um dos pilares da assistência à saúde?",
    description: (
      <>
        <p>
          Problemas na assistência à saúde são a terceira maior causa de morte
          nos hospitais no Estados Unidos e um grande responsável por isso é a
          transferência de cuidados.
        </p>
        <p>
          {" "}
          Entre os anestesiologistas estima-se que aumenta em 8% o risco de
          morte de um paciente a cada passagem de plantão por conta da
          integridade das informações
        </p>
      </>
    ),
    url: "https://segurancadopaciente.com.br/noticia/erro-medico-e-terceira-causa-de-morte-nos-eua-estima-pesquisa/#:~:text=A%20pesquisa%20in%C3%A9dita%2C%20publicada%20no,de%20doen%C3%A7as%20card%C3%ADacas%20e%20c%C3%A2ncer.",
  },
  {
    title: "Participação coletiva - Sistema de Evoluções",
    content: (
      <>
        <p>
          Olá colaborador HMLEM, estamos tentando melhorar, otimizar e facilitar
          os fluxos no atendimento médico e de enfermagem para os pacientes
          internados.{" "}
        </p>
        <p>
          Para isso estamos criando um sistema que facilite o acompanhamento da
          evolução, prescrição, sinais vitais, dentre outros aspectos como
          documentos assistenciais automáticos para reduzir a carga de estresse
          por demandas administrativas e otimizar a comunicação no hospital.
          Gostaríamos de saber o que você gostaria de ver nesse sistema. (Em
          breve)
        </p>
      </>
    ),
  },
  {
    title: "Participação coletiva - Pensando em mudanças",
    content: (
      <p>
        O que você gostaria de ver no hospital ou que mudasse em caso de uma
        reforma estrutural? (Em breve pesquisa)
      </p>
    ),
  },
];

export { news };
