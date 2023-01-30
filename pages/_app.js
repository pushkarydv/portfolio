import "../styles/tailwind_config.css";
import "../styles/globals.css";
import "../styles/customConfiguration.css";
import Cursor from "../components/global/Cursor";

export default function App({ Component, pageProps }) {
  return (
    <main className="custom-font min-h-screen w-full bg-slate-50 text-slate-800 ">
      <Cursor />
      <Component {...pageProps} />
    </main>
  );
}
