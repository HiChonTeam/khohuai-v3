import React, { useRef } from "react";
import styles from "./index.module.scss";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Index: React.FC = () => {

  const email = useRef(null);
  const password = useRef(null);

  return (
    <div className={styles.LoginPage}>
      <div className={styles.Title}>เข้าสู่ระบบ</div>
      <Input type="text" label="อีเมล" ref={email} />
      <Input type="password" label="รหัสผ่าน" ref={password} />
      <Button type="button" color="primary" full className={styles.btnLogin}>ลงชื่อเข้าใช้</Button>
    </div>
  );
};

export default Index;
