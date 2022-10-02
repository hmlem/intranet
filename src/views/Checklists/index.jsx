import { sortByDisabledAndName } from "services/utils";

import data from "./data";

import Page from "layouts/OneColumn";
import React from "react";

export default () => {
  return (
    <Page>
      <p>
        Lista de <strong>checklists</strong> abaixo:
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
                <a href={url} target="_blank" rel="noreferrer">
                  Acessar link
                </a>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </Page>
  );
};
