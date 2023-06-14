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
import { adminCtx } from './context/AdminContext';
import { loginCtx } from './context/LoginContext';
import Layout from './layout';
import Dashboard from './pages/Admin';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Report from './pages/Report';
import Signup from './pages/Signup';

function App() {
  const { isLogin } = useContext(loginCtx);
  const { isAdmin } = useContext(adminCtx);
  const RequireAuth = ({ children }) => {
    if (isLogin) {
      return <>{children}</>;
    }
    return <Navigate to={'/'} />;
  };
  const RequireAdmin = ({ children }) => {
    if (isAdmin) {
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
            path="/signup"
            element={
              <Layout>
                <Signup />
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
            path="/profile"
            element={
              <Layout>
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <Dashboard />
              </RequireAdmin>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
