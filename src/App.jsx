import './App.css';

import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsRefreshing } from './redux/auth/selectors';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from './components/RestrictedRoute';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import ContactsPage from './pages/ContactsPage';
import { refreshUser } from './redux/auth/operations';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
