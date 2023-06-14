import { classNames } from 'utils/classnames';
import TermField from './TermField';
import TermTextarea from './TermTextarea';

const TermLabel = ({ label, text }: { label: string; text: string }) => {
  return (
    <div
      className={classNames(
        'w-full flex flex-col gap-2',
        label === 'Descrição detalhada' || label === 'Tooltip'
          ? 'lg:col-span-2'
          : ''
      )}
    >
      <label className="text-sm font-medium text-white">{label}</label>
      {label === 'Descrição detalhada' || label === 'Tooltip' ? (
        <TermTextarea text={text} />
      ) : (
        <TermField text={text} />
      )}
    </div>
  );
};

export default TermLabel;
