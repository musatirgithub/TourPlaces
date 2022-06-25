import navbarStyle from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <ul className={navbarStyle['navbar-container']} >
        <li>ABOUT US</li>
        <li>FOR YOU</li>
        <li>SERVICES</li>
        <li>BLOG</li>
        <li>VLOG</li>
        <li>CONTACT</li>
    </ul>
  )
}

export default Navbar;