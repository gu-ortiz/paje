import { Tab } from '@headlessui/react';
import {
  AnvisaApresentacoesType,
  AnvisaArquivosType,
  AnvisaFabricantesType
} from 'types/anvisa';
import { ResponseAnvisaType } from 'types/api';
import { classNames } from 'utils/classnames';
import { formatDate } from 'utils/date';
import SkeletonAnvisa from './SkeletonAnvisa';
import TermLabel from './TermLabel';

const Anvisa = ({ response }: { response: ResponseAnvisaType }) => {
  const data = response.body;

  return Object.keys(data || {}).length > 0 ? (
    <div className="w-full flex flex-col focus:outline-none">
      <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2 focus:outline-none">
        <TermLabel label="Produto" text={String(data.produto)} />
        <TermLabel label="Nome técnico" text={String(data.nomeTecnico)} />
        <TermLabel label="Registro" text={String(data.registro)} />
        <TermLabel label="Processo" text={String(data.processo)} />
        <TermLabel label="Cancelado" text={String(data.cancelado)} />
        <TermLabel
          label="Data do cancelamento"
          text={String(data.dataCancelamento)}
        />
      </div>

      <h3 className="text-lg font-semibold mt-5 mb-2">Empresa</h3>
      <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2 focus:outline-none">
        <TermLabel label="CNPJ" text={String(data.empresa.cnpj)} />
        <TermLabel
          label="Razão social"
          text={String(data.empresa.razaoSocial)}
        />
        <TermLabel
          label="Autorização"
          text={String(data.empresa.autorizacao)}
        />
      </div>

      <h3 className="text-lg font-semibold mt-5 mb-2">Mensagem</h3>
      <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2 focus:outline-none">
        <TermLabel label="Situação" text={String(data.mensagem.situacao)} />
        <TermLabel label="Resolução" text={String(data.mensagem.resolucao)} />
        <TermLabel label="Motivo" text={String(data.mensagem.motivo)} />
        <TermLabel label="Negativo" text={String(data.mensagem.negativo)} />
      </div>

      {data?.apresentacoes?.length > 0 && (
        <>
          <h3 className="text-lg font-semibold mt-5 mb-2">Apresentações</h3>
          <Tab.Group>
            <Tab.List className="w-full flex justify-between items-center p-0.5 gap-0.5 mb-2 bg-white rounded-md overflow-x-auto whitespace-nowrap sm:scrollbar-thin sm:scrollbar-thumb-gray-800 sm:scrollbar-track-transparent">
              {data.apresentacoes.map(
                (apresentacao: AnvisaApresentacoesType, index: number) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      classNames(
                        'flex-1 text-sm rounded-md font-semibold p-1.5 leading-4 focus:outline-none',
                        selected
                          ? 'bg-gray-800 text-white'
                          : 'bg-transparent text-gray-800 hover:bg-gray-600 hover:text-white'
                      )
                    }
                  >
                    {apresentacao.modelo.split(' ')[0]}
                  </Tab>
                )
              )}
            </Tab.List>

            <Tab.Panels className="w-full focus:outline-none">
              {data.apresentacoes.map(
                (apresentacao: AnvisaApresentacoesType, index: number) => (
                  <Tab.Panel
                    key={index}
                    className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2 focus:outline-none"
                  >
                    <TermLabel
                      label="Modelo"
                      text={String(apresentacao.modelo)}
                    />
                    <TermLabel
                      label="Componente"
                      text={String(apresentacao.componente)}
                    />
                    <TermLabel
                      label="Apresentação"
                      text={String(apresentacao.apresentacao)}
                    />
                  </Tab.Panel>
                )
              )}
            </Tab.Panels>
          </Tab.Group>
        </>
      )}

      {data?.fabricantes?.length > 0 && (
        <>
          <h3 className="text-lg font-semibold mt-5 mb-2">Fabricantes</h3>
          <Tab.Group>
            <Tab.List className="w-full flex justify-between items-center p-0.5 gap-0.5 mb-2 bg-white rounded-md overflow-x-auto whitespace-nowrap sm:scrollbar-thin sm:scrollbar-thumb-gray-800 sm:scrollbar-track-transparent">
              {data.fabricantes.map(
                (fabricante: AnvisaFabricantesType, index: number) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      classNames(
                        'flex-1 text-sm rounded-md font-semibold p-1.5 leading-4 focus:outline-none',
                        selected
                          ? 'bg-gray-800 text-white'
                          : 'bg-transparent text-gray-800'
                      )
                    }
                  >
                    {fabricante.razaoSocial}
                  </Tab>
                )
              )}
            </Tab.List>

            <Tab.Panels className="w-full focus:outline-none">
              {data.fabricantes.map(
                (fabricante: AnvisaFabricantesType, index: number) => (
                  <Tab.Panel
                    key={index}
                    className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2 focus:outline-none"
                  >
                    <TermLabel
                      label="Atividade"
                      text={String(fabricante.atividade)}
                    />
                    <TermLabel
                      label="Razão Social"
                      text={String(fabricante.razaoSocial)}
                    />
                    <TermLabel label="País" text={String(fabricante.pais)} />
                    <TermLabel label="Local" text={String(fabricante.local)} />
                  </Tab.Panel>
                )
              )}
            </Tab.Panels>
          </Tab.Group>
        </>
      )}

      <h3 className="text-lg font-semibold mt-5 mb-2">Risco</h3>
      <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2 focus:outline-none">
        <TermLabel label="Sigla" text={String(data.risco.sigla)} />
        <TermLabel label="Descrição" text={String(data.risco.descricao)} />
      </div>

      <h3 className="text-lg font-semibold mt-5 mb-2">Vencimento</h3>
      <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2 focus:outline-none">
        <TermLabel label="Data" text={formatDate(data.vencimento.data)} />
        <TermLabel label="Descrição" text={String(data.vencimento.descricao)} />
      </div>

      {data?.arquivos?.length > 0 && (
        <>
          <h3 className="text-lg font-semibold mt-5 mb-2">Arquivos</h3>
          <Tab.Group>
            <Tab.List className="w-full flex justify-between items-center p-0.5 gap-0.5 mb-2 bg-white rounded-md overflow-x-auto whitespace-nowrap sm:scrollbar-thin sm:scrollbar-thumb-gray-800 sm:scrollbar-track-transparent">
              {data.arquivos.map(
                (arquivo: AnvisaArquivosType, index: number) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      classNames(
                        'flex-1 text-sm rounded-md font-semibold p-1.5 leading-4 focus:outline-none',
                        selected
                          ? 'bg-gray-800 text-white'
                          : 'bg-transparent text-gray-800'
                      )
                    }
                  >
                    {arquivo.nomeArquivo}
                  </Tab>
                )
              )}
            </Tab.List>

            <Tab.Panels className="w-full focus:outline-none">
              {data.arquivos.map(
                (arquivo: AnvisaArquivosType, index: number) => (
                  <Tab.Panel
                    key={index}
                    className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2 focus:outline-none"
                  >
                    <TermLabel
                      label="Nome completo"
                      text={String(arquivo.nomeCompleto)}
                    />
                    <TermLabel
                      label="Nome do arquivo"
                      text={String(arquivo.nomeArquivo)}
                    />
                    <TermLabel
                      label="Tipo de arquivo"
                      text={String(arquivo.tipoArquivo)}
                    />
                    <TermLabel
                      label="Código do anexo"
                      text={String(arquivo.anexoCod)}
                    />
                    <TermLabel
                      label="Tipo de anexo"
                      text={String(arquivo.tipoAnexo)}
                    />
                    <TermLabel
                      label="Descrição do tipo de anexo"
                      text={String(arquivo.descricaoTipoAnexo)}
                    />
                    <TermLabel
                      label="Expediente"
                      text={String(arquivo.nuExpediente)}
                    />
                    <TermLabel
                      label="Processo"
                      text={String(arquivo.nuProcesso)}
                    />
                    <TermLabel
                      label="Data de envio"
                      text={formatDate(arquivo.dtEnvio)}
                    />
                  </Tab.Panel>
                )
              )}
            </Tab.Panels>
          </Tab.Group>
        </>
      )}

      <h3 className="text-lg font-semibold mt-5 mb-2">Outras informações</h3>
      <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2 focus:outline-none">
        <TermLabel label="Publicação" text={String(data.publicacao)} />
        <TermLabel
          label="Apresentação do modelo"
          text={String(data.apresentacaoModelo)}
        />
        <TermLabel
          label="Processo de medida cautelar"
          text={String(data.processoMedidaCautelar)}
        />
        <TermLabel label="Tooltip" text={String(data.tooltip)} />
      </div>
    </div>
  ) : response.error ? (
    <div className="w-full text-center col-span-2">
      <p className="text-base text-white">Desculpe</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
        {response.status === 404
          ? 'O insumo que você está procurando não foi encontrado na API da Anvisa'
          : 'A API da Anvisa parece estar fora do ar'}
      </h1>
      <p className="mt-6 text-base leading-7 text-white">
        Tente novamente mais tarde
      </p>
    </div>
  ) : (
    <SkeletonAnvisa />
  );
};

export default Anvisa;
