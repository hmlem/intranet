const baseUrlChecklists = `${process.env.PUBLIC_URL}/checklists`;

export default [
  {
    title: "Checklist - Protocolo IAM",
    url: `${baseUrlChecklists}/checklist_protocolo_iam.pdf`,
  },
  {
    title: "Checklist - Procedimentos padrão da Enfermagem",
    description:
      "Garantir a verificação de todos os itens essenciais para a prática assistencial diária no hospital ",
  },
  {
    title: "Checklist - Código Vermelho - Caixa HPP",
    url: `${baseUrlChecklists}/checklist_codigo_vermelho.pdf`,
  },
  {
    title: "Checklist - Código Azul - Carrinho de Parada",
  },
  {
    title: "Checklist - Psicotrópicos e Medicações de uso controlado",
  },
];
