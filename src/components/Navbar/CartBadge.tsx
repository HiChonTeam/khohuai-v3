import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartBadge.module.scss";
import { Link } from "react-router-dom";

const count = 9;
const data = [
  {
    number: "795850",
    qty: 5,
  },
  {
    number: "125440",
    qty: 1,
  },
  {
    number: "999888",
    qty: 2,
  },
  {
    number: "795850",
    qty: 5,
  },
  {
    number: "125440",
    qty: 1,
  },
  {
    number: "999888",
    qty: 322,
  },
];
const price = 80;

const CartBadge: React.FC = () => {
  const [totalQty, settotalQty] = useState<Number>(0);
  const [totalPay, settotalPay] = useState<Number>(0);

  useEffect(() => {
    const { qty, total } = data.reduce(
      (sum, current) => {
        return {
          ...sum,
          qty: sum.qty + current.qty,
          total: current.qty * price,
        };
      },
      { qty: 0, total: 0 }
    );

    settotalQty(qty);
    settotalPay(total);
  }, [data]);

  return (
    <div className={styles.CartBadge}>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
        <div className={styles.Badge}>{count}</div>
      </Link>

      <div className={styles.PopOver}>
        <div className={styles.triangleUp}>&nbsp;</div>
        <div className={styles.MyCart}>
          <div className={styles.head}>
            <div>ตระกร้าสินค้า</div>
            <div><Link to='/cart'>ดูทั้งหมด</Link></div>
          </div>
          <div className={styles.body}>
            <div className={styles.List}>
              {data.map((item, index) => {
                return (
                  <div className={styles.Item} key={index}>
                    <div className={styles.number}>{item.number}</div>
                    <div className={styles.qty}>{item.qty}</div>
                    <div>ใบ</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.summary}>
              <div>ทั้งหมด</div>
              <div className={styles.sum}>{totalQty}</div>
              <div className={styles.b}>ใบ</div>
            </div>
            <div className={styles.summary}>
              <div>ยอดชำระทั้งสิ้น</div>
              <div className={styles.sum}>
                {totalPay.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </div>
              <div className={styles.baht}>บาท</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBadge;
