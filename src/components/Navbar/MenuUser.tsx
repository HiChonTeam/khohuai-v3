import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";
import styles from "./MenuUser.module.scss";
import DropdownUser from "./DropdownUser";

const avater =
  "https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.18169-9/1916686_905168856257945_9023155128655466155_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=f9d7a1&_nc_eui2=AeHHaN_lE9HGlpr5V93leL1NIl7Xf6uud2kiXtd_q653aTpxp-Z_GFBZ5Nv01a4GJnIPNQkTM6GA4-hEw1iD8DB4&_nc_ohc=JUY8Vp0MulkAX_gabh-&_nc_oc=AQmbdf8_2THk4FhxtzVVqNoOq9v5cgxthQ3oHggaPnajGiHBXegMxKzfzz8O2ETcEMQ&_nc_ht=scontent.fbkk5-8.fna&oh=00_AT__Sb_V4xy3-ixyM_9IRaiPkzmswabv8eDYXfLJRF9Hcg&oe=627B3E9A";

const isLoggedIn = true;

interface MenuUserProps {}

const MenuUser: React.FC<MenuUserProps> = () => {
  if (!isLoggedIn) {
    return (
      <Link to={"/login"}>
        <div className={[styles.LoginButton].join(" ")}>เข้าสู่ระบบ</div>
      </Link>
    );
  }

  return (
    <div className={styles.GroupMenu}>
      <CartBadge />
      <DropdownUser/>
    </div>
  );
};

export default MenuUser;
