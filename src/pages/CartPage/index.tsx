import { FC } from "react";
import { useAppSelector } from "../../hook";
import styles from "./index.module.scss";
import Summary from "./Summary";
import CartItem from "./CartItem";

const Index: FC = () => {
  const cartState = useAppSelector((state) => state.cart);

  return (
    <div className={styles.CartPage}>
      <div className={["container", styles.Section].join(" ")}>
        <div>
          <div className={styles.SelectAll}>
              <input type="checkbox" name="selectall"/>
              <div>เลือกทั้งหมด</div>
          </div>
          <div className={styles.CartList}>
            {cartState.all_items.map((item, index) => {
              return <CartItem key={index} {...item} />;
            })}
          </div>
        </div>
        <Summary />
      </div>
    </div>
  );
};

export default Index;
