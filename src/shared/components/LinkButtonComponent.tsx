import Link from "next/link";

interface IProps {
  href: string;
  label: string;
}
export default function LinkButtonComponent(props: IProps) {
  const { label, href } = props;
  return (
    <Link
      className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-purple-800 hover:bg-purple-900 focus:ring-purple-950 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
      href={href}
    >
      {label}
    </Link>
  );
}
