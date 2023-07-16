import NavComponent from "@/modules/layout/components/NavComponent";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function LayoutComponent(props: IProps) {
  const { children } = props;

  return (
    <div className="bg-white dark:bg-purple-950 h-screen pt-24">
      <NavComponent />
      <div className="max-w-screen-xl mx-auto px-4">{children}</div>
    </div>
  );
}
