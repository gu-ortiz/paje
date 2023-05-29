import TermField from './TermField';

const TermLabel = ({ label, text }: { label: string; text: string }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-sm font-medium text-white">{label}</label>
      <TermField text={text} />
    </div>
  );
};

export default TermLabel;
