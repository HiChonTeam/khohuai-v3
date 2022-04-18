
import React, { FormEvent, FormEventHandler, useEffect, useRef } from "react"; 
import styles from "./Login.module.scss";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../hook"; 
import { loginUser } from "../../store/slices/auth";
import { Link, useNavigate } from "react-router-dom";  

const Login: React.FC = () => {
  const navigate = useNavigate(); 

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const login = (event:FormEvent) => {

    event.preventDefault()

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

    if (authState.loggedIn) { 
      navigate("/"); 
    } 
  }, [authState]); 

  return (
    <div className={styles.LoginPage}>
      <div className={styles.Title}>เข้าสู่ระบบ</div>
      <form onSubmit={login}>
      <Input
      spellCheck="false"
        type="text" 
        label="อีเมล" 
        ref={email} 
      />
      <Input
        spellCheck="false"
        type="password" 
        label="รหัสผ่าน" 
        ref={password} 
      />
      <Button 
        type="submit" 
        color="primary" 
        full={true} 
        className={styles.btnLogin} 
        isLoading={authState.loading === "pending" ? true : false} 
      >
        ลงชื่อเข้าใช้
      </Button>
      </form>
      <div className={styles.CreateAccount}>
        หากคุณยังไม่มีบัญชีผู้ใช้งาน  
        <Link to='/register'>สร้างบัญชี</Link>
        </div>
    </div>
  );
};

export default Login;
