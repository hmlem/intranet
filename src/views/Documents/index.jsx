import Header from "components/Header";
import Page from "layouts/Page";
import React from "react";
export default () => {
  return (
    <Page>
      <Header />
      <main>
        Lista de <strong>documentos</strong> abaixo:{" "}
        <pre>Pressione Ctrl + F para pesquisar o nome do arquivo</pre>
      </main>
    </Page>
  );
};
