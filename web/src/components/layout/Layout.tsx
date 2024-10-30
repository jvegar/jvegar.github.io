import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.layoutContainer__main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
