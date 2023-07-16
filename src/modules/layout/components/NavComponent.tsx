import Link from "next/link";
import LinkButtonComponent from "@/modules/shared/components/LinkButtonComponent";
import ThemeSwitch from "@/modules/layout/components/ThemeSwitch";

export default function NavComponent() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Link href={"/"}>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              EventPlanner
            </span>
          </Link>
        </div>
        <div className="flex gap-10">
          <ThemeSwitch />
          <LinkButtonComponent href={"/manageEvents"} label={"Manage Events"} />
        </div>
      </div>
    </nav>
  );
}
