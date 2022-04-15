import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faAngleUp,
  faAngleDown,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import styles from "./DropdownUser.module.scss";

const avater =
  "https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.18169-9/1916686_905168856257945_9023155128655466155_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=f9d7a1&_nc_eui2=AeHHaN_lE9HGlpr5V93leL1NIl7Xf6uud2kiXtd_q653aTpxp-Z_GFBZ5Nv01a4GJnIPNQkTM6GA4-hEw1iD8DB4&_nc_ohc=JUY8Vp0MulkAX_gabh-&_nc_oc=AQmbdf8_2THk4FhxtzVVqNoOq9v5cgxthQ3oHggaPnajGiHBXegMxKzfzz8O2ETcEMQ&_nc_ht=scontent.fbkk5-8.fna&oh=00_AT__Sb_V4xy3-ixyM_9IRaiPkzmswabv8eDYXfLJRF9Hcg&oe=627B3E9A";

const DropdownUser: React.FC = () => {
  const [isOpenDropdown, setisOpenDropdown] = useState(false);

  return (
    <div>
      <div className={styles.User}>
        <div
          className={styles.currentUser}
          onClick={() => setisOpenDropdown(true)}
        >
          <img className={styles.avater} src={avater} alt="" />
          <div>BossZa</div>
          {isOpenDropdown ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </div>
        <div
          className={[
            styles.dropdown,
            isOpenDropdown ? styles.active : "",
          ].join(" ")}
        >
          <div className={styles.dropdownItem}>
            <FontAwesomeIcon icon={faUserAlt} />
            <div>ข้อมูลส่วนตัว</div>
          </div>
          <div className={styles.dropdownItem}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <div>ออกจากระบบ</div>
          </div>
        </div>
      </div>

      {/* overlay menu */}
      {isOpenDropdown ? (
        <div
          className={styles.overlay}
          onClick={() => setisOpenDropdown(false)}
        >
          &nbsp;
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DropdownUser;
