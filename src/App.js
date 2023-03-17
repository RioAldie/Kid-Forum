import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import Dashboard from './pages/Admin';
import Home from './pages/Home';
import Report from './pages/Report';

function App() {
  const customeTheme = createTheme({
    palette: {
      primary: {
        main: '#ff0032',
      },
    },
  });
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={customeTheme}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/Report"
            element={
              <Layout>
                <Report />
              </Layout>
            }
          />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
