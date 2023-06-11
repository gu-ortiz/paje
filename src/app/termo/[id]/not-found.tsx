import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-zinc-300">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">
          Termo não encontrado
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-300">
          Desculpe, não encontramos o termo que você está procurando.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 focus:outline-none"
          >
            Página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
