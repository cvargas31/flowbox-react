import { FaBars } from "react-icons/fa";
import logo from "../assets/flowbox-logo.png";
import "./Navbar.css";
import { links, socialIcons } from "../data";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {

  const [toggleNavbar, setToggleNavbar] = useState(false)
  const linksContainerRef =  useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    console.log(linksHeight);
    if(toggleNavbar){
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [toggleNavbar])

  return (
    <nav className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="" />
        <button className="nav-toggle" onClick={() => setToggleNavbar(!toggleNavbar)}>
          <FaBars />
        </button>
      </div>
      <div className="links-container show-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {socialIcons.map((icons) => {
          const { id, url, icon } = icons;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
