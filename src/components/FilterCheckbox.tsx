import { CheckIcon } from '@heroicons/react/24/outline';
import { classNames } from 'utils/classnames';

const FilterCheckbox = ({
  label,
  checked,
  onChange
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onChange}>
      <div
        className={classNames(
          'w-4 h-4 border rounded-sm flex justify-center items-center',
          checked
            ? 'bg-gray-800 border-gray-800'
            : 'bg-transparent border-gray-800'
        )}
      >
        {checked && <CheckIcon className="h-4 w-4 text-white" />}
      </div>
      <span className="text-sm text-gray-800">{label}</span>
    </div>
  );
};

export default FilterCheckbox;
