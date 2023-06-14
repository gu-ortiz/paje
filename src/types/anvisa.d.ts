export type AnvisaEmpresaType = {
  cnpj: string;
  razaoSocial: string;
  autorizacao: string;
};

export type AnvisaMensagemType = {
  situacao: null | string;
  resolucao: null | string;
  motivo: null | string;
  negativo: boolean;
};

export type AnvisaApresentacoesType = {
  modelo: string;
  componente: null | string;
  apresentacao: null | string;
};

export type AnvisaFabricantesType = {
  atividade: string;
  razaoSocial: string;
  pais: string;
  local: null | string;
};

export type AnvisaRiscoType = {
  sigla: string;
  descricao: string;
};

export type AnvisaVencimentoType = {
  data: string;
  descricao: null | string;
};

export type AnvisaArquivosType = {
  anexoCod: string;
  nuExpediente: string;
  nomeArquivo: string;
  tipoAnexo: number;
  tipoArquivo: string;
  dtEnvio: string;
  nuProcesso: string;
  descricaoTipoAnexo: string;
  nomeCompleto: string;
};

export type AnvisaType = {
  produto: string;
  nomeTecnico: string;
  registro: string;
  processo: string;
  cancelado: boolean;
  dataCancelamento: null | string;
  publicacao: null | string;
  apresentacaoModelo: boolean;
  processoMedidaCautelar: null | string;
  empresa: EmpresaType;
  mensagem: MensagemType;
  risco: RiscoType;
  vencimento: VencimentoType;
  apresentacoes: ApresentacoesType[];
  fabricantes: FabricantesType[];
  arquivos: ArquivosType[];
  tooltip: string;
};
