import { CssBaseline } from '@mui/material';
import Header from '../components/Header';
import { WallsProvider } from '../hooks/useWalls';
import './main.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WallsProvider>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </WallsProvider>
    </>
  );
}

export default MyApp;
