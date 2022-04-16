import React, { ButtonHTMLAttributes, FC, ForwardRefRenderFunction } from "react";
import styles from "./index.module.scss";
import Ripples from "react-ripples";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: string;
  full?: boolean;
}

const Index:FC <ButtonProps> = ({ children, className, color, full = false }) => {
  return (
    <Ripples className={styles.RippleButton} color="#f1f1f16e" during={700}>
      <button
        className={[
          className,
          styles.Button,
          (color === "primary" ? styles.Color : " "),
          (full ? styles.Full : '' )
        ].join(" ")}
      >
        {children}
      </button>
    </Ripples>
  );
};

export default Index;
