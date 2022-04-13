import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import ListMenu from "./ListMenu";
import MenuUser from "./MenuUser";

const Navbar: React.FC = () => {

  const [isActivebgNavbar, setisActivebgNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        if (!isActivebgNavbar) {
            setisActivebgNavbar(true);
        }
      }
      else { 
        setisActivebgNavbar(false);
      }
    });
  }, [isActivebgNavbar]);

  return (
    <nav className={[styles.navbar, isActivebgNavbar ? styles.active : '' ].join(" ")}>
      <div className={[styles.navbarContainer].join(" ")}>

        {/* left */}
        <div className={[styles.navbarLeft].join(" ")}>
          <Link to={"/"}>
            <h1>Khohuai</h1>
          </Link>
          <ListMenu />
        </div>

        {/* right */}
        <div className={[styles.navbarRight].join(" ")}>
          <MenuUser isActivebgNavbar={isActivebgNavbar} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
