import { sortByDisabledAndName } from "services/utils";

import data from "./data";

import TwoColumnLayout from "layouts/TwoColumns";
import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";

export default () => {
  const [samplePDFUrl, setSamplePDFUrl] = useState(null);

  useEffect(() => {
    console.log(samplePDFUrl);
  }, [samplePDFUrl]);

  return (
    <TwoColumnLayout
      firstColumn={
        <div>
          <p>
            Lista de <strong>protocolos e fluxogramas</strong> abaixo:
          </p>
          <pre>Pressione Ctrl + F para pesquisar o nome do arquivo</pre>
          <ul>
            {sortByDisabledAndName(data).map(({ title, description, url }) => {
              return (
                <li key={title} className={!url ? "disabled" : ""}>
                  <header>
                    <h4>{title}</h4>
                  </header>
                  {description || ""}
                  <br />
                  {url ? (
                    <p>
                      <button onClick={() => setSamplePDFUrl(url)}>
                        Acessar ao lado
                      </button>
                      <a href={url} target="_blank" rel="noreferrer">
                        Acessar link
                      </a>
                    </p>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
          <p>Em breve calculadora de protocolos</p>
        </div>
      }
      secondColumn={
        <Document file={samplePDFUrl}>
          <Page pageNumber={1} />
        </Document>
      }
    />
  );
};
