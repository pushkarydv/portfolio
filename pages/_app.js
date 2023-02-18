import "../styles/tailwind_config.css";
import "../styles/customConfiguration.css";
import "../styles/scrollbar.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="custom-font min-h-screen w-full bg-slate-50 text-slate-800 ">
      <Component {...pageProps} />
    </main>
  );
}
