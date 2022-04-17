import React from "react";
import styles from "./LandingScreen.module.scss";
import background from "../../assets/images/main_background.jpg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import NotMember from "../../components/Role/NotMember";

const LandingScreen: React.FC = () => {
  return (
    <div className={styles.Landing}>
      <img src={background} className={styles.background} alt="background" />
      <div className={styles.overlay}>
        <div className={["container", styles.grid].join(" ")}>
          <div>
            <h2>Online Platform</h2>
            <h3>จำหน่ายสลากออนไลน์</h3>
            <h4>ซื้อง่าย ซื้อได้ทุกที่ ทุกเวลา</h4>
            <NotMember>
              <Link to={"/login"}>
                <Button color="primary">เข้าสู่ระบบ</Button>
              </Link>
            </NotMember>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
