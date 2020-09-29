import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavIcon,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              Picco Cabs
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <AiOutlineClose /> : <AiOutlineMenu />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}></NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
