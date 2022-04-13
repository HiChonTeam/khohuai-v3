import React from "react";
import { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import styles from "./index.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, ...otherProps },
  ref
) => {
  return (
      <div className={styles.InputGroup}>
          <div className={styles.Label}>{label}</div>
          <input className={[styles.Input].join(" ")} {...otherProps} ref={ref} />
      </div>
    
  );
};

const Index = React.forwardRef(Input);

export default Index;
