import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon
} from '@heroicons/react/24/outline';
import { MouseEvent, useState } from 'react';

const TermField = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="w-full flex group rounded-lg">
      <input
        type="text"
        className="w-full h-10 pl-5 pr-0 py-2 rounded-l-lg text-zinc-300 bg-white placeholder:text-zinc-300 focus:outline-none focus:text-gray-800 cursor-text"
        placeholder=""
        spellCheck="false"
        value={text}
        disabled
      />
      <button
        onClick={handleClick}
        disabled={copied}
        className="relative w-12 h-10 pr-px flex justify-center items-center rounded-r-lg text-zinc-300 bg-white active:hover:text-gray-600 focus:outline-none hover:text-gray-800"
      >
        {copied ? (
          <ClipboardDocumentCheckIcon
            className="block h-5 w-5 text-gray-800"
            aria-hidden="true"
          />
        ) : (
          <ClipboardDocumentIcon className="block h-5 w-5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
};

export default TermField;
