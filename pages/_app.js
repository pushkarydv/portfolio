import "../styles/tailwind_config.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  // TODO: ADD CUSTOM FONT
  return (
    <main className="custom-font">
      <Component {...pageProps} />
    </main>
  );
}
