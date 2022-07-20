import Navigation from "../navigation/index";
import Footer from "../footer/index";

const Layout = ({ children }) => (
  <div>
    <Navigation/>
    {children}
    <Footer />
  </div>
);
export default Layout;
