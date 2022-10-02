import { news } from "./data";

import Page from "layouts/OneColumn";
import React from "react";

export default () => {
  return (
    <Page>
      <section>
        <h1>Informações e novidades</h1>
        <ul>
          {news.map(({ title, description, url }) => {
            return (
              <li key={title}>
                <div>
                  <header>
                    <h4>{title}</h4>
                  </header>
                  {description || ""}
                  {url ? (
                    <a href={url} target="_blank" rel="noreferrer">
                      Ver mais sobre
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h1>Links Úteis</h1>
        <ul>
          <li>
            <a
              href="http://regulacao.saude.ba.gov.br/"
              target="_blank"
              rel="noreferrer"
            >
              Sistema de Regulação - SESAB
            </a>
          </li>
          <li>
            <a href="https://login.live.com/" target="_blank" rel="noreferrer">
              Login Outlook
            </a>
            (email da enfermagem)
          </li>
          <li>
            <a
              href="https://docs.google.com/spreadsheets/d/18fQxG84HDmaXlTWqHwKeehTQtrKB9_QNrixyKTfZ5SY/edit"
              target="_blank"
              rel="noreferrer"
            >
              Planilha eletrônica online para
            </a>{" "}
            (Favor solicitar permissão no primeiro acesso) Contactar a direção
            clínica{" "}
            <a
              href="https://wa.me/5571992518950?text=Estou+precisando+que+voc%c3%aa+aprove+minha+entrada+na+planilha%2c+acabei+de+solicitar"
              target="_blank"
              rel="noreferrer"
            >
              (71)99251-8950
            </a>{" "}
            se o acesso não for concedido de imediato. Pode ligar também! Isso
            só será necessário no primeiro acesso, lembre-se sempre de entrar na
            sua conta em uma{" "}
            <a
              href="https://support.google.com/chrome/answer/95464?hl=pt-BR&co=GENIE.Platform%3DDesktop"
              target="_blank"
              rel="noreferrer"
            >
              janela anônima
            </a>{" "}
            para que sua conta não fique aberta no computador
          </li>
          <li>
            <a
              href="https://www.mdcalc.com/calc/2023/padua-prediction-score-risk-vte"
              target="_blank"
              rel="noreferrer"
            >
              Score de predição de risco para TVP
            </a>
            ,{" "}
            <a
              href="https://www.scielo.br/j/jvb/a/p9vrkYLJqKyZM4yXYjmxcRL/?format=pdf&lang=pt"
              target="_blank"
              rel="noreferrer"
            >
              quimioprofilaxia deve ser administrada em pacientes de
              internamento com risco alto (Maior ou igual a 4)
            </a>{" "}
            Para mais informações{" "}
            <a
              href="https://www.scielo.br/j/jvb/a/p9vrkYLJqKyZM4yXYjmxcRL/?format=pdf&lang=pt"
              target="_blank"
              rel="noreferrer"
            >
              vide protocolo
            </a>
          </li>
          <li>
            <a
              href="https://calc.filipelopes.med.br/"
              target="_blank"
              rel="noreferrer"
            >
              Calculadoras Pessoais de Filipe Lopes
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h1>Contatos Úteis</h1>
        <ul>
          <li>SAMU: 192</li>
        </ul>
      </section>
    </Page>
  );
};
