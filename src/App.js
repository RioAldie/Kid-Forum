import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import './App.css';
import Home from './pages/home';

function App() {
  const customeTheme = createTheme({
    palette: {
      primary: {
        main: '#ff0032',
      },
    },
  });
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={customeTheme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
