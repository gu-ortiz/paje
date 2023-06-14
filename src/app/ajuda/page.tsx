'use client';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default async function Page() {
  const qaList = [
    {
      question: 'O que é o Pajé?',
      answer:
        'O Pajé é uma aplicação web que facilita a pesquisa de dados das tabelas TUSS (Terminologia Unificada da Saúde Suplementar) do padrão TISS (Troca de Informações na Saúde Suplementar) estabelecido pela ANS (Agência Nacional de Saúde Suplementar).'
    },
    {
      question: 'O que significa "TUSS" e por que ele é importante?',
      answer:
        'TUSS é a sigla para Terminologia Unificada da Saúde Suplementar. É um padrão estabelecido pela ANS (Agência Nacional de Saúde Suplementar) para padronizar os termos usados na saúde suplementar. Isso facilita a comunicação e a troca de informações entre diferentes partes, como prestadores de serviços de saúde, operadoras de planos de saúde e beneficiários.'
    },
    {
      question:
        'O que são as informações da Anvisa que são fornecidas para medicamentos e materiais?',
      answer:
        'Além das informações da tabela TUSS, a aplicação também fornece informações da Anvisa (Agência Nacional de Vigilância Sanitária) para medicamentos e materiais. Estas são informações adicionais que podem ser úteis para entender melhor o termo.'
    },
    {
      question: 'Como posso pesquisar por um termo específico?',
      answer:
        'Você pode pesquisar por um termo específico usando a barra de pesquisa no cabeçalho da aplicação. Basta digitar o termo que você está procurando e pressionar Enter ou clicar na lupa à direita da barra de pesquisa.'
    },
    {
      question: 'Como posso ver mais detalhes sobre um termo?',
      answer:
        'Cada termo é representado por um cartão na página principal da aplicação. Você pode clicar em um cartão para ver mais detalhes sobre o termo.'
    },
    {
      question:
        'Como posso voltar para a página inicial depois de visualizar os detalhes de um termo?',
      answer:
        'Para voltar à página inicial, você pode clicar no logo do Pajé no cabeçalho da aplicação. Isso irá levá-lo de volta à lista principal de termos.'
    },
    {
      question: 'Como posso atualizar a página?',
      answer:
        'Você pode atualizar a página a qualquer momento clicando no botão de atualização do seu navegador ou pressionando a tecla F5.'
    },
    {
      question: 'Como funciona a paginação infinita?',
      answer:
        'A paginação infinita permite que você continue a rolar para baixo para ver mais termos. À medida que você rola para baixo, mais termos são carregados automaticamente.'
    },
    {
      question: 'O que acontece se eu pesquisar por um termo que não existe?',
      answer:
        'Se você pesquisar por um termo que não existe na tabela TUSS, a aplicação irá retornar uma lista vazia. Isso significa que o termo que você pesquisou não foi encontrado.'
    },
    {
      question: 'A aplicação é compatível com dispositivos móveis?',
      answer:
        'Sim, a aplicação é responsiva e pode ser usada em dispositivos móveis. Isso significa que a interface do usuário se ajustará automaticamente para caber na tela do seu dispositivo, seja ele um smartphone, tablet ou desktop.'
    },
    {
      question: 'A aplicação Pajé está disponível em outros idiomas?',
      answer:
        'Atualmente, a aplicação Pajé está disponível apenas em português. No entanto, estamos sempre trabalhando para melhorar e expandir nossos serviços, e a adição de outros idiomas pode ser uma possibilidade no futuro.'
    }
  ];

  return (
    <div className="w-full flex flex-col rounded-2xl bg-white shadow-md p-2 gap-2">
      {qaList.map((qa, i) => (
        <Disclosure key={i}>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex justify-between items-center rounded-md bg-gray-800 px-4 py-2 text-left text-sm text-white hover:bg-gray-700 focus:outline-none">
                <span>{qa.question}</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white flex-shrink-0`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 py-2 text-sm text-gray-800">
                {qa.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
