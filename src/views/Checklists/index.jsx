import { sortByDisabledAndName } from "services/utils";

import data from "./data";

import TwoColumnLayout from "layouts/TwoColumns";
import React, { useState } from "react";

export default () => {
  const [samplePDFUrl, setSamplePDFUrl] = useState(null);
  return (
    <TwoColumnLayout
      firstColumn={
        <div>
          <p>
            Lista de <strong>checlists</strong> abaixo:
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
                      {url.indexOf("http") > -1 ? (
                        <a href={url} target="_blank" rel="noreferrer">
                          Acessar link
                        </a>
                      ) : (
                        <button onClick={() => setSamplePDFUrl(url)}>
                          Acessar ao lado
                        </button>
                      )}
                    </p>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      }
      secondColumn={
        <div>
          <iframe
            title="pdf"
            src={samplePDFUrl}
            width="95%"
            height="600px"
          ></iframe>
        </div>
      }
    />
  );
};
