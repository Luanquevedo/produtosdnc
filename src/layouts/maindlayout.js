// pages/_app.js
import '../styles/globals.scss'; // Caminho pode variar, mas isso é ESSENCIAL

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
