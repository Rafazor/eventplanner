import Link from "next/link";
import LinkButtonComponent from "@/shared/components/LinkButtonComponent";
import ThemeSwitch from "@/modules/layout/components/ThemeSwitch";

export default function NavComponent() {
  return (
    <nav className="bg-purple-500 dark:bg-purple-950 fixed w-full z-20 top-0 left-0 border-b border-purple-700 dark:border-purple-950">
      <div className="max-w-screen-md flex items-center justify-between mx-auto py-4 px-8">
        <div className="flex items-center mr-5">
          <Link href={"/"}>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-purple-950 dark:text-purple-50">
              EventPlanner
            </span>
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          <ThemeSwitch />
          <LinkButtonComponent href={"/manageEvents"} label={"Manage Events"} />
        </div>
      </div>
    </nav>
  );
}
