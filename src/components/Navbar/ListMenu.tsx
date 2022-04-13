import React from "react";
import { Link } from "react-router-dom";
import styles from "./ListMenu.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStore, faSearch } from '@fortawesome/free-solid-svg-icons';

const nav_menu = [
  {
    name: "หน้าแรก",
    icon: faHome,
    path: "/",
  },
  {
    name: "ร้านค้าสลาก",
    icon: faStore,
    path: "/search",
  },
  {
    name: "ผลการออกสลาก",
    icon: faSearch,
    path: "/lotto-thailand",
  },
];

const ListMenu: React.FC = () => {
  return (
    <ul className={[styles.navLink].join(" ")}>
      {nav_menu.map((item) => {
        return (
          <li key={item.path}>
            <Link to={item.path}>
              <div>
                {/* <item.icon/> */}
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.name}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ListMenu;
