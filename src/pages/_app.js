import '../styles/globals.css'
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import { Burger, Menu } from '../components';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
