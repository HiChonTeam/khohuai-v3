import React, { useEffect, useRef } from "react"; 
import styles from "./index.module.scss";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../hook"; 
import { loginUser } from "../../store/slices/auth";
import { useNavigate } from "react-router-dom"; 

const Index: React.FC = () => {
  const navigate = useNavigate();

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const login = () => {
    const _email = String(email.current?.value).trim();
    const _password = String(password.current?.value).trim();

    if (_email && _password) {
      const body = {
        email: _email,
        password: _password,
      };

      dispatch(loginUser(body)); 
    }
  };

  useEffect(() => {
    console.log(authState.loggedIn);
    if (authState.loggedIn) {
      navigate("/");
    }
  }, [authState]);

  return (
    <div className={styles.LoginPage}>
      <div className={styles.Title}>เข้าสู่ระบบ</div>
      <Input
        type="text"
        label="อีเมล"
        defaultValue={"test@gmail.com"}
        ref={email}
      />
      <Input
        type="password"
        label="รหัสผ่าน"
        defaultValue={"1234"}
        ref={password}
      />
      <Button
        type="button"
        color="primary"
        full={true}
        className={styles.btnLogin}
        onClick={login}
        isLoading={authState.loading === "pending" ? true : false}
      >
        ลงชื่อเข้าใช้
      </Button>
    </div>
  );
};

export default Index;
