export function getTable(id: string | number) {
  switch (id) {
    case '18' || 18:
      return 'diarias-e-taxas';
    case '19' || 19:
      return 'materiais-e-opme';
    case '20' || 20:
      return 'medicamentos';
    case '22' || 22:
      return 'procedimentos';
    default:
      return 'demais-terminologias';
  }
}

export function getTermLabel(term: string) {
  switch (term) {
    case 'apresentacao':
      return 'Apresentação';
    case 'assinatura_digital':
      return 'Requer assinatura digital na mensagem de envio';
    case 'classe_risco':
      return 'Classe de risco';
    case 'codigo':
      return 'Código';
    case 'codigo_anvisa':
      return 'Registro Anvisa';
    case 'codigo_tuss':
      return 'Código do termo';
    case 'descricao_detalhada':
      return 'Descrição detalhada';
    case 'descricao_grupo':
      return 'Descrição do grupo';
    case 'dt_fim_vigencia':
      return 'Data de fim de vigência';
    case 'dt_implantacao':
      return 'Data de fim de implantação';
    case 'dt_inicio_vigencia':
      return 'Data de início de vigência';
    case 'fabricante':
      return 'Fabricante';
    case 'forma_de_envio':
      return 'Forma de envio';
    case 'grupo':
      return 'Grupo';
    case 'laboratorio':
      return 'Laboratório';
    case 'modelo':
      return 'Modelo';
    case 'nome_tecnico':
      return 'Nome técnico';
    case 'sigla':
      return 'Sigla';
    case 'tabela':
      return 'Tabela';
    case 'terminologia':
      return 'Terminologia';
    case 'termo':
      return 'Termo';
    default:
      return normalizeTerm(term);
  }
}

function normalizeTerm(term: string) {
  term = term.replace(/_/g, ' ');
  term = term
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
  return term;
}
