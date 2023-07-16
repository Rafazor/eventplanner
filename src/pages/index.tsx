import { Inter } from "next/font/google";
import CoreContainer from "@/modules/events/containers/CoreContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <CoreContainer />;
}
