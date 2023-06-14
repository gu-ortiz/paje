export function getAnvisaLabel(field: string) {
  switch (field) {
    case 'produto':
      return 'Produto';
    case 'empresa':
      return 'Empresa';
    case 'mensagem':
      return 'Mensagem';
    case 'nomeTecnico':
      return 'Nome Técnico';
    case 'registro':
      return 'Registro';
    case 'cancelado':
      return 'Cancelado';
    case 'dataCancelamento':
      return 'Data de Cancelamento';
    case 'processo':
      return 'Processo';
    case 'apresentacoes':
      return 'Apresentações';
    case 'fabricantes':
      return 'Fabricantes';
    case 'risco':
      return 'Risco';
    case 'vencimento':
      return 'Vencimento';
    case 'publicacao':
      return 'Publicação';
    case 'apresentacaoModelo':
      return 'Apresentação Modelo';
    case 'arquivos':
      return 'Arquivos';
    case 'processoMedidaCautelar':
      return 'Processo Medida Cautelar';
    case 'tooltip':
      return 'Tooltip';
    default:
      return field;
  }
}
