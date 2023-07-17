import NavComponent from "@/modules/layout/components/NavComponent";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function LayoutComponent(props: IProps) {
  const { children } = props;

  return (
    <div className="bg-white dark:bg-purple-950 h-screen">
      <NavComponent />
      <div className="max-w-screen-md mx-auto px-4 pt-24 pb-16">{children}</div>
    </div>
  );
}
