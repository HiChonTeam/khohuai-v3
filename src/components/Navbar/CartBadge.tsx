import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTriangleCircleSquare,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./CartBadge.module.scss";

const count = 9;

const CartBadge: React.FC = () => {
  return (
    <div className={styles.CartBadge}>
      <FontAwesomeIcon icon={faCartShopping} size="2x" />
      <div className={styles.Badge}>{count}</div>

      <div className={styles.PopOver}>
        <div className={styles.triangleUp}>&nbsp;</div>
        <div className={styles.body}>
          <div>ตระกร้าสินค้า</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CartBadge;
