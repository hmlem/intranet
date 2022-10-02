const baseUrlFlowcharts = `${process.env.PUBLIC_URL}/flowcharts`;

export default [
  {
    title:
      "Protocolo SBAR - Transição de cuidados, passagem de plantão - Instituto Brasileiro de Segurança do Paciente",
    description:
      "Protocolo inicialmente criado entre militares e utilizado em saúde para comunicação rápida e eficiente. S: Situação do paciente, B: Breve histórico, A: Avaliação física clínica e exames, o que foi feito e as condições atuais do paciente, R: Ação recomendada, condutas sugeridas",
    url: "https://segurancadopaciente.com.br/qualidade-assist/como-usar-o-metodo-sbar-na-transicao-do-cuidado",
  },
  {
    title: "Protocolo Monkeypox - Manejo e notificação",
    url: `${baseUrlFlowcharts}/fluxograma_manejo_mokeypok.jpg`,
  },
  {
    title: "Protocolo Raiva/Acidente com animais",
    url: `${baseUrlFlowcharts}/protocolo_profilaxia_raiva_humana.jpg`,
  },
  {
    title: "Protocolo Vermelho/HPP - Gestante - Hemorragia pós parto",
    url: "https://www.figma.com/file/ikjHWkKVHk9xLEjydFBsuv/Protocolos-HMLEM?node-id=1%3A689",
  },
  {
    title: "PALS 2020 (Bradicardia) - Bradicardia na criança",
  },
  {
    title: "ACLS 2020 (Parada cardiorespiratória) - PCR no adulto",
  },
  {
    title: "ALSO - Minemônicos",
    description:
      "Minemônicos para facilitar pensamento rápido em situações de urgência/emergêcia no parto e trabalho de parto para:  hemorragia pós parto, parto em situação pélvica, distócia de ombro, parto assistido e avaliação de bem estar fetal",
  },
];
