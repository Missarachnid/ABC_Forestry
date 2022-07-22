import headerStyles from "../../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/Amanda-final-transparent.svg"

const Navigation = () => (
  <header className={headerStyles.header}>
    <Link href="/">
      <>
      <Image id={headerStyles.img} src={logo} alt="Logo of a transparent aspen leaf with white showing the edges. The white becomes the outline of flame on one side and a water droplet on the other" width="70px" height="60px"/>
      </>
    </Link>
    <Link className={headerStyles.links} href="/about">About</Link>
    <Link href="/education">Education</Link>
    <Link href="/work">Work</Link>
    <Link href="/forestfacts">Forest Facts</Link>
  </header>
);
export default Navigation;