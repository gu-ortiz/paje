import { Tab } from '@headlessui/react';
import {
  AnvisaApresentacoesType,
  AnvisaFabricantesType,
  AnvisaType
} from 'types/anvisa';
import TermLabel from './TermLabel';

const Anvisa = ({ data }: { data: AnvisaType | Record<string, never> }) => {
  return Object.keys(data).length > 0 ? (
    <div>
      <TermLabel label="Produto" text={data.produto} />
      <TermLabel label="Nome Técnico" text={data.nomeTecnico} />
      <TermLabel label="Registro" text={data.registro} />
      <TermLabel label="Processo" text={data.processo} />
      <TermLabel label="Tooltip" text={data.tooltip} />

      <div>
        <h3>Empresa</h3>
        <TermLabel label="CNPJ" text={data.empresa.cnpj} />
        <TermLabel label="Razão Social" text={data.empresa.razaoSocial} />
        <TermLabel label="Autorização" text={data.empresa.autorizacao} />
      </div>

      <div>
        <h3>Mensagem</h3>
        <TermLabel label="Negativo" text={String(data.mensagem.negativo)} />
      </div>

      <Tab.Group>
        <Tab.List>
          <Tab>Apresentações</Tab>
          <Tab>Fabricantes</Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            {data.apresentacoes.map(
              (apresentacao: AnvisaApresentacoesType, index: number) => (
                <div key={index}>
                  <TermLabel label="Modelo" text={apresentacao.modelo} />
                </div>
              )
            )}
          </Tab.Panel>

          <Tab.Panel>
            {data.fabricantes.map(
              (fabricante: AnvisaFabricantesType, index: number) => (
                <div key={index}>
                  <TermLabel label="Atividade" text={fabricante.atividade} />
                  <TermLabel
                    label="Razão Social"
                    text={fabricante.razaoSocial}
                  />
                  <TermLabel label="País" text={fabricante.pais} />
                </div>
              )
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  ) : (
    <div className="w-full text-center col-span-2">
      <p className="text-base text-white">Desculpe</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
        A API da Anvisa parece estar fora do ar
      </h1>
      <p className="mt-6 text-base leading-7 text-white">
        Tente novamente mais tarde
      </p>
    </div>
  );
};

export default Anvisa;
