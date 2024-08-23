import '@styles/globals.css'; // Ensure this path is correct
import Nav from '@components/navbar/navbar';
import Footer from '@components/footer/footer';
import { AuthProvider } from '@/contexts/AuthContext';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100"> {/* Apply a background color to the body if needed */}
        <AuthProvider>
          <div className="main">
            <div className="gradient" />
          </div>
          <Nav /> {/* Navigation bar outside of the main content */}
          <main className="app p-4 sm:p-6 md:p-8 lg:p-12"> {/* Ensure padding is applied */}
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
