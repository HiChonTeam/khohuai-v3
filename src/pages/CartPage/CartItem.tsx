import { FC } from "react";
import { useAppDispatch } from "../../hook";
import styles from "./CartItem.module.scss";
import Button from "../../components/Button";
import { decreaseFromCart, increaseToCart, removeFromCart } from "../../store/slices/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Ripples from "react-ripples";

interface LotteyItemInterface {
  number: string;
  qty: number;
  rating: number;
  status: string;
  img: string;
}

const CartItem: FC<LotteyItemInterface> = ({ number, qty, img }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.cartItem}>
      <div>
        <input type="checkbox" />
      </div>
      <div className={styles.number}>
        {/* <img src={item.img} alt={item.number}/> */}
        {number}
      </div>

      <div className={styles.group_btn}>
        <Ripples className={styles.btn} onClick={()=> dispatch(decreaseFromCart(number))}>
          <FontAwesomeIcon icon={faMinus} />
        </Ripples>
        <div className={styles.qty}>
          <div>{qty} ใบ</div>
        </div>
        <Ripples className={styles.btn} onClick={()=> dispatch(increaseToCart(number))}>
          <FontAwesomeIcon icon={faPlus} />
        </Ripples>
      </div>
      <Ripples className={styles.btn} onClick={() => dispatch(removeFromCart(number))}>
        <FontAwesomeIcon icon={faTrash} />
      </Ripples>
    </div>
  );
};

export default CartItem;
