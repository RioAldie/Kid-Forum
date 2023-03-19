import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { useContext } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import { loginCtx } from './context/LoginContext';
import Layout from './layout';
import Dashboard from './pages/Admin';
import Home from './pages/Home';
import Report from './pages/Report';

function App() {
  const { isLogin, setShow } = useContext(loginCtx);
  const RequireAuth = ({ children }) => {
    if (isLogin) {
      return <>{children}</>;
    }

    return <Navigate to={'/'} />;
  };
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
                <RequireAuth>
                  <Report />
                </RequireAuth>
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
