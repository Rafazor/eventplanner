import clsx from "clsx";

interface IProps {
  onClick?: () => void;
  type: "button" | "submit";
  label: string;
  className?: string;
  disabled?: boolean;
}

export default function ButtonComponent(props: IProps) {
  const {
    onClick,
    type = "button",
    label,
    className,
    disabled = false,
  } = props;
  return (
    <button
      disabled={disabled}
      className={clsx(
        "text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-purple-800 hover:bg-purple-900 focus:ring-purple-950 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800",
        className,
      )}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
