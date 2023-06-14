import { Tab } from '@headlessui/react';
import { useEffect, useState } from 'react';
import {
  AnvisaApresentacoesType,
  AnvisaArquivosType,
  AnvisaFabricantesType
} from 'types/anvisa';
import { ResponseAnvisaType } from 'types/api';
import { getAnvisa } from 'utils/api';
import { classNames } from 'utils/classnames';
import { formatDate } from 'utils/date';
import SkeletonAnvisa from './SkeletonAnvisa';
import TermLabel from './TermLabel';

const Anvisa = ({ id }: { id: string }) => {
  const [response, setResponse] = useState<ResponseAnvisaType>({
    status: 200,
    statusText: '',
    error: false,
    body: {}
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAnvisa(
        `${process.env.NEXT_PUBLIC_API_URL}/anvisa/${id}`
      );

      setResponse(response);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const data = response.body;

  return !loading ? (
    !response.error ? (
      <div className="w-full flex flex-col">
        <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2">
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
        <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2">
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
        <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2">
          <TermLabel label="Situação" text={String(data.mensagem.situacao)} />
          <TermLabel label="Resolução" text={String(data.mensagem.resolucao)} />
          <TermLabel label="Motivo" text={String(data.mensagem.motivo)} />
          <TermLabel label="Negativo" text={String(data.mensagem.negativo)} />
        </div>

        <h3 className="text-lg font-semibold mt-5 mb-2">Apresentações</h3>
        <Tab.Group>
          <Tab.List className="w-full flex justify-between items-center p-0.5 mb-2 bg-white rounded-md">
            {data.apresentacoes.map(
              (apresentacao: AnvisaApresentacoesType, index: number) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    classNames(
                      'flex-1 text-sm rounded-md font-semibold p-1 leading-4 focus:outline-none',
                      selected
                        ? 'bg-gray-800 text-white'
                        : 'bg-transparent text-gray-800'
                    )
                  }
                >
                  {apresentacao.modelo}
                </Tab>
              )
            )}
          </Tab.List>

          <Tab.Panels className="max-w-full overflow-x-auto">
            {data.apresentacoes.map(
              (apresentacao: AnvisaApresentacoesType, index: number) => (
                <Tab.Panel
                  key={index}
                  className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2"
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

        <h3 className="text-lg font-semibold mt-5 mb-2">Fabricantes</h3>
        <Tab.Group>
          <Tab.List className="w-full flex justify-between items-center p-0.5 mb-2 bg-white rounded-md">
            {data.fabricantes.map(
              (fabricante: AnvisaFabricantesType, index: number) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    classNames(
                      'flex-1 text-sm rounded-md font-semibold p-1 leading-4 focus:outline-none',
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

          <Tab.Panels className="w-full">
            {data.fabricantes.map(
              (fabricante: AnvisaFabricantesType, index: number) => (
                <Tab.Panel
                  key={index}
                  className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2"
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

        <h3 className="text-lg font-semibold mt-5 mb-2">Risco</h3>
        <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2">
          <TermLabel label="Sigla" text={String(data.risco.sigla)} />
          <TermLabel label="Descrição" text={String(data.risco.descricao)} />
        </div>

        <h3 className="text-lg font-semibold mt-5 mb-2">Vencimento</h3>
        <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2">
          <TermLabel label="Data" text={formatDate(data.vencimento.data)} />
          <TermLabel
            label="Descrição"
            text={String(data.vencimento.descricao)}
          />
        </div>

        <h3 className="text-lg font-semibold mt-5 mb-2">Arquivos</h3>
        <Tab.Group>
          <Tab.List className="w-full flex justify-between items-center p-0.5 mb-2 bg-white rounded-md">
            {data.arquivos.map((arquivo: AnvisaArquivosType, index: number) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    'flex-1 text-sm rounded-md font-semibold p-1 leading-4 focus:outline-none',
                    selected
                      ? 'bg-gray-800 text-white'
                      : 'bg-transparent text-gray-800'
                  )
                }
              >
                {arquivo.nomeArquivo}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="max-w-full overflow-x-auto">
            {data.arquivos.map((arquivo: AnvisaArquivosType, index: number) => (
              <Tab.Panel
                key={index}
                className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2"
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
                  label="Descricao do tipo de anexo"
                  text={String(arquivo.descricaoTipoAnexo)}
                />
                <TermLabel
                  label="Expediente"
                  text={String(arquivo.nuExpediente)}
                />
                <TermLabel label="Processo" text={String(arquivo.nuProcesso)} />
                <TermLabel
                  label="Data de envio"
                  text={formatDate(arquivo.dtEnvio)}
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <h3 className="text-lg font-semibold mt-5 mb-2">Outras informações</h3>
        <div className="w-full gap-4 grid grid-cols-1 lg:grid-cols-2">
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
    ) : (
      <div className="w-full text-center col-span-2">
        <p className="text-base text-white">Desculpe</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          {response.status === 500
            ? 'O insumo que você está procurando não foi encontrado na API da Anvisa'
            : 'A API da Anvisa parece estar fora do ar'}
        </h1>
        <p className="mt-6 text-base leading-7 text-white">
          Tente novamente mais tarde
        </p>
      </div>
    )
  ) : (
    <SkeletonAnvisa />
  );
};

export default Anvisa;
