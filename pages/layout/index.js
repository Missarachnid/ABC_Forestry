import Navigation from "../navigation/index";
import Footer from "../footer/index";
import layoutStyles from "../../styles/Layout.module.css";

const Layout = ({ children }) => (
  <div id={layoutStyles.layout}>
    <Navigation/>
    {children}
    <Footer />
  </div>
);
export default Layout;
