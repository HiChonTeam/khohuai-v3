
import React, { FormEvent, useEffect, useRef } from "react"; 
import styles from "./Login.module.scss";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../hook"; 
import { registerUser } from "../../store/slices/auth";
import { Link, useNavigate } from "react-router-dom";  

const Register: React.FC = () => {
  const navigate = useNavigate(); 

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const password_confirm = useRef<HTMLInputElement>(null);

  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const register = (event:FormEvent) => {

    event.preventDefault()

    const _email = String(email.current?.value).trim(); 
    const _password = String(password.current?.value).trim();  
    const _password_confirm = String(password.current?.value).trim();  

    if (_email && _password && _password_confirm) {

      if ( _password !== _password_confirm) {
          return console.log('password not match');
      }

      const body = {
        email: _email,
        password: _password,
      };

      dispatch(registerUser(body));  
    }
  };

  useEffect(() => { 

    if (authState.loggedIn) { 
      navigate("/"); 
    } 
  }, [authState]); 

  return (
    <div className={styles.LoginPage}>
      <div className={styles.Title}>สร้างบัญชีผู้ใช้</div>
      <form onSubmit={register}>
      <Input
        type="text" 
        label="อีเมล" 
        spellCheck="false"
        ref={email} 
      />
      <Input
        type="password" 
        label="รหัสผ่าน" 
        spellCheck="false"
        ref={password} 
      />
      <Input
        type="password" 
        label="ยืนยันรหัสผ่าน" 
        spellCheck="false"
        ref={password_confirm} 
      />
      <Button 
        type="submit" 
        color="primary" 
        full={true} 
        className={styles.btnLogin} 
        onClick={register} 
        isLoading={authState.loading === "pending" ? true : false} 
      >
        สร้างบัญชีผู้ใช้
      </Button>
      </form>
      <div className={styles.CreateAccount}>
        หากคุณมีบัญชีผู้ใช้งานอยู่แล้ว  
        <Link to='/login'>เข้าสู่ระบบ</Link>
        </div>
    </div>
  );
};

export default Register;
