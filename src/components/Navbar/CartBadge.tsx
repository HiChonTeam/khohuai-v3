import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartBadge.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook";
import { getMyCart } from "../../store/slices/cart";

const CartBadge: React.FC = () => {

  const dispatch = useAppDispatch();
  const cartState = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getMyCart());
  }, [cartState]);

  return (
    <div className={styles.CartBadge}>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
        {
          cartState.loading !== 'pending' ? 
           <div className={styles.Badge}>{cartState.totalQty}</div>
          :  
          null
        }
       
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
              {cartState.all_items.map((item, index) => {
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
              <div className={styles.sum}>{cartState.totalQty}</div>
              <div className={styles.b}>ใบ</div>
            </div>
            <div className={styles.summary}>
              <div>ยอดชำระทั้งสิ้น</div>
              <div className={styles.sum}>
                {cartState.totalPrice.toLocaleString(undefined, {
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
