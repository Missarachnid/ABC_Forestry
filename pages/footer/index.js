import footerStyles from "../../styles/Footer.module.css";
import twitter from "../../public/images/Twitter_Social_Icon_Circle_White.png";
import Image from "next/image";

const Footer = () => (
  <footer className={footerStyles.footer}>
    <p>ⓒ 2022 ABC Forestry</p>
    <a href="https://www.twitter.com">
      <Image src={twitter} alt="white twitter bird logo" height="32px" width="32px"/>
    </a>
  </footer>
);
export default Footer;