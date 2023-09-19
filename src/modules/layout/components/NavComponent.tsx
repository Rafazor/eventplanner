import Link from "next/link";
import LinkButtonComponent from "@/modules/shared/components/LinkButtonComponent";
import ThemeSwitchComponent from "@/modules/layout/components/ThemeSwitchComponent";

export default function NavComponent() {
  return (
    <nav className="bg-purple-500 dark:bg-purple-950 fixed w-full z-40 top-0 left-0 border-b border-purple-700 dark:border-purple-950">
      <div className="max-w-screen-md flex items-center justify-between mx-auto p-4">
        <div className="flex items-center mr-5">
          <Link href={"/"}>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-purple-950 dark:text-purple-50">
              EventPlanner
            </span>
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          <ThemeSwitchComponent />
          <LinkButtonComponent href={"/manageEvents"} label={"Manage Events"} />
        </div>
      </div>
    </nav>
  );
}
