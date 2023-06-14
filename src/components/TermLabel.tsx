import { classNames } from 'utils/classnames';
import TermField from './TermField';
import TermTextarea from './TermTextarea';

const TermLabel = ({ label, text }: { label: string; text: string }) => {
  return (
    <div
      className={classNames(
        'w-full flex flex-col gap-2',
        label === 'descricao_detalhada' ? 'lg:col-span-2' : ''
      )}
    >
      <label className="text-sm font-medium text-white">{label}</label>
      {label === 'descricao_detalhada' ? (
        <TermTextarea text={text} />
      ) : (
        <TermField text={text} />
      )}
    </div>
  );
};

export default TermLabel;
