
import { ButtonHTMLAttributes, FC, useEffect } from "react";
import styles from "./index.module.scss";
import Ripples from "react-ripples";
import Spinner from "../Loading/Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: string;
  full?: boolean; 
  isLoading?: boolean; 
}

const Index: FC<ButtonProps> = ({
  children,
  className,
  color, 
  full = false, 
  isLoading = false, 
  ...rest 
}) => {

  return (
    <Ripples
      className={[full ? styles.Full : " "].join(" ")} 
      color="#f1f1f16e" 
      during={700} 
    >
      <button 
        className={[ 
          className,
          styles.Button, 
          color === "primary" ? styles.Color : " ", 
          full ? styles.Full : " ", 
        ].join(" ")}
        disabled={isLoading ? true : false}  
        {...rest} 
      >
        { children} 
      </button> 
    </Ripples> 
  );
};

export default Index;
