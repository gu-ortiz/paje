'use client';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default async function Page() {
  const qaList = [
    {
      question: '',
      answer: ''
    },
    {
      question: '',
      answer: ''
    },
    {
      question: '',
      answer: ''
    },
    {
      question: '',
      answer: ''
    },
    {
      question: '',
      answer: ''
    }
  ];

  return (
    <div className="w-full flex flex-col rounded-2xl bg-white p-2 gap-2">
      {qaList.map((qa, i) => (
        <Disclosure key={i}>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex justify-between items-center rounded-lg bg-gray-800 px-4 py-2 text-left text-sm font-medium text-white hover:bg-gray-700 focus:outline-none">
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
