import "@/styles/globals.css";
import '@/components/landing/style.css'
import '@/components/footer/style.css'
import '@/components/navbar/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
