import NavComponent from "@/modules/layout/components/NavComponent";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function LayoutComponent(props: IProps) {
  const { children } = props;

  return (
    <>
      <NavComponent />
      <div className="max-w-screen-xl  mx-auto mt-24">{children}</div>
    </>
  );
}
