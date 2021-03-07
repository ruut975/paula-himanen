import Navbar from "../containers/Navbar/Navbar";
import Footer from "../containers/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="containerFlex">
      <Navbar />
      <main className="mainFlex">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
