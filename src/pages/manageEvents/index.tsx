import { Inter } from "next/font/google";
import CoreContainer from "@/modules/manage-events/containers/CoreContainer";

const inter = Inter({ subsets: ["latin"] });

export default function ManageEvents() {
  return <CoreContainer />;
}
