export type TermType = {
  id: number;
  codigo_tuss: string;
  termo: string;
  tabela: number;
  dt_inicio_vigencia: string;
  dt_fim_vigencia: string;
  dt_implantacao: string;
  extra_fields: { [key: string]: string } | null;
  anvisa_fields: { [key: string]: string } | null;
};

export type RecommendationType = {
  id: number;
  field: string;
  match: string;
};
