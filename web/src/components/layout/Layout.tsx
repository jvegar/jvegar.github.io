import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="App">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
