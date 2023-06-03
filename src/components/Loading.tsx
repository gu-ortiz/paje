import { classNames } from 'utils/classnames';

const LoadingIcon = ({
  className = 'h-5 w-5 border-zinc-300'
}: {
  className: string;
}) => {
  return (
    <svg className={classNames('animate-spin', className)} viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r="20"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="80"
        strokeDashoffset="20"
      />
    </svg>
  );
};

export default LoadingIcon;
