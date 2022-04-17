import React from "react";
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";
import styles from "./MenuUser.module.scss";
import DropdownUser from "./DropdownUser";
import MemberOnly from "../Role/MemberOnly";
import NotMember from "../Role/NotMember";

interface MenuUserProps {}

const MenuUser: React.FC<MenuUserProps> = () => {
  return (
    <>
      <MemberOnly>
        <div className={styles.GroupMenu}>
          <CartBadge />
          <DropdownUser />
        </div>
      </MemberOnly>
      <NotMember>
        <Link to={"/login"}>
          <div className={[styles.LoginButton].join(" ")}>เข้าสู่ระบบ</div>
        </Link>
      </NotMember>
    </>
  );
};

export default MenuUser;
