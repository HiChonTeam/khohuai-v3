import React from "react";
import MemberOnly from "../../components/Role/MemberOnly";
import HotNumber from "./HotNumber";
import styles from "./index.module.scss";
import LandingScreen from "./LandingScreen";

const Mainpage: React.FC = () => {
  return (
    <div className={styles.background} id="#">
        <LandingScreen />
        <MemberOnly>
          <HotNumber />
        </MemberOnly>
    </div>
  );
};

export default Mainpage;
