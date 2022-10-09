import Container from "./styles";

import Item from "./components/Item";
import { news } from "./data";

import Page from "layouts/OneColumn";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default () => {
  return (
    <Page>
      <Container>
        <Carousel
          autoPlay={true}
          swipeable={true}
          emulateTouch={true}
          infiniteLoop={true}
          stopOnHover={true}
        >
          <div>
            <a
              href="http://regulacao.saude.ba.gov.br/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/slides/acesso_regulacao.png"
                alt="Acesse a central de regulação"
              />
            </a>
          </div>
          <div>
            <a
              href="https://forms.gle/BRyhQpKJNJH3H6GbA"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/slides/cadastro_medico.png"
                alt="Cadastro do corpo clínico"
              />
            </a>
          </div>
          <div>
            <a
              href="https://forms.gle/vAJkfy4tsfMtXWeX6"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/slides/enfermagem_pcr.png"
                alt="Atualização da atenção ao paciente em PCR"
              />
            </a>
          </div>
          <div>
            <a
              href="https://forms.gle/5DY4ax9FD4gnTZdg8"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/slides/estudo_medico.png"
                alt="Grupo de estudo médico para revisão de protocolos e educação continuada"
              />
            </a>
          </div>
        </Carousel>
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
          <ul id="ul-links-uteis">
            <Item
              imgSrc="/img/icons/regulacao_icon.png"
              content={
                <a
                  href="http://regulacao.saude.ba.gov.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sistema de Regulação - SESAB
                </a>
              }
            />
            <Item
              imgSrc="/img/icons/g_forms_icon.png"
              content={
                <a
                  href="https://forms.gle/2fDFfb3qqrBLjZWL6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Críticas e reclamações! Suas reclamações são importantes para
                  podermos melhorar!{" "}
                  <strong>Não precisa se identificar!</strong>
                </a>
              }
            />
            <Item
              imgSrc="/img/icons/outlook_icon.png"
              content={
                <p>
                  <a
                    href="https://login.live.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Login Outlook
                  </a>{" "}
                  (email da enfermagem)
                </p>
              }
            />
            <Item
              imgSrc="/img/icons/g_sheet_icon.png"
              content={
                <p>
                  <a
                    href="https://docs.google.com/spreadsheets/d/18fQxG84HDmaXlTWqHwKeehTQtrKB9_QNrixyKTfZ5SY/edit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Planilha eletrônica online para evolução de pacientes
                    internados
                  </a>{" "}
                  (Favor solicitar permissão no primeiro acesso) Contactar a
                  direção clínica{" "}
                  <a
                    href="https://wa.me/5571992518950?text=Estou+precisando+que+voc%c3%aa+aprove+minha+entrada+na+planilha%2c+acabei+de+solicitar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (71)99251-8950
                  </a>{" "}
                  se o acesso não for concedido de imediato. Pode ligar também!
                  Isso só será necessário no primeiro acesso, lembre-se sempre
                  de entrar na sua conta em uma{" "}
                  <a
                    href="https://support.google.com/chrome/answer/95464?hl=pt-BR&co=GENIE.Platform%3DDesktop"
                    target="_blank"
                    rel="noreferrer"
                  >
                    janela anônima
                  </a>{" "}
                  para que sua conta não fique aberta no computador
                </p>
              }
            />
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
            <li>
              Centro de Informação e Assistência Toxicológica da Bahia -
              CIATox-BA (antigo CIAVE): (71)3103-4303
            </li>
            <li>Polícia Civil</li>
            <li>Polícia Militar</li>
            <li>SAMU (Central de Referência Serrinha): 192</li>
            <li>Vigilância Epidemiológica (VIEP):</li>
          </ul>
        </section>
      </Container>
    </Page>
  );
};
