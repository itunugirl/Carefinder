import '@styles/globals.css';
import Nav from '@components/navbar/navbar';
import Footer from '@components/footer/footer';
import { metadata } from './metaData';
import { AuthProvider } from '@/contexts/AuthContext';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="main">
            <div className="gradient" />
          </div>
          <Nav /> {/* Navigation bar outside of the main content */}
          <main className="app">
            {children}
            <Footer />
          </main>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
