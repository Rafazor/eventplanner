interface IProps {
  label?: string;
  onChange: (isChecked: boolean) => void;
  value: boolean;
}

export default function ToggleComponent(props: IProps) {
  const { label, onChange, value } = props;

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
        checked={value}
      />
      <div className="w-11 h-6 bg-purple-950 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-purple-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
      {label && (
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </span>
      )}
    </label>
  );
}
