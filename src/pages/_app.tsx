import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import LayoutComponent from "@/modules/layout/components/LayoutComponent";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
