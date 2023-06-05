export type TermType = {
  codigo_tuss: string;
  termo: string;
  tabela: number;
  dt_inicio_vigencia: string;
  dt_fim_vigencia: string;
  dt_implantacao: string;
  extra_fields: { [key: string]: string } | null;
  anvisa: { [key: string]: string } | null;
};
