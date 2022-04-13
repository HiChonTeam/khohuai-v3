import React, { ButtonHTMLAttributes } from 'react';
import styles from './index.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { };

const index: React.FC<ButtonProps> = ({children}) => {
  return (
    <button className={styles.Button}> 
        {children}
    </button>
  )
}

export default index;