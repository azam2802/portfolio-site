import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BackToTop from "../ui/BackToTop/BackToTop";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BackToTop />
      <Footer />
    </>
  );
};

export default Layout;
