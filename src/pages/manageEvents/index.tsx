import { Inter } from "next/font/google";
import CoreContainer from "@/modules/manageEvents/containers/CoreContainer";

const inter = Inter({ subsets: ["latin"] });

export default function ManageEvents() {
  return <CoreContainer />;
}
