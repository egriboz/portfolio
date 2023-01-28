import "../styles/globals.css";
import "../styles/theme.css";
import { LayoutGroup } from "framer-motion";
import Header from "../components/Header";
import { ThemeProvider } from '../components/ThemeContext';


function MyApp({ Component, pageProps, router }) {
  return (
    <>
      {/* <Header /> */}
      <ThemeProvider>
        <LayoutGroup
        // mode="wait"
        // initial={false}
        // onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.asPath} />
        </LayoutGroup>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
