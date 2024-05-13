import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
