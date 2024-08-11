import '@styles/globals.css';
import Nav from '@components/navbar/Navbar';
import Footer from '@components/footer/Footer';

export const metadata = {
  title: "MedEase",
  description: "Your health services companion"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>

        <main className='app'>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
