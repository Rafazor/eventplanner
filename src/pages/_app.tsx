import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import LayoutComponent from "@/modules/layout/components/LayoutComponent";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </QueryClientProvider>
  );
}
