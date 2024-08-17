// src/app/layout.tsx
import '@styles/globals.css';
import Nav from '@components/navbar/navbar';
import Footer from '@components/footer/footer';
import { metadata } from '@data/metaData'; // Import the metadata
import { AuthProvider } from '@contexts/AuthContext';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <AuthProvider>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app-container">
            <Nav />
            <main className="app">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
