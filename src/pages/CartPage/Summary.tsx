import { FC } from "react";
import styles from "./Summary.module.scss";
import Button from "../../components/Button";
import { useAppSelector } from "../../hook";

const Summary: FC = () => {
  const cartState = useAppSelector((state) => state.cart);

  return (
    <div className={styles.Summary}>
      <div className={styles.title}>สรุปรายการซื้อ</div>
      <div>
        <div className={styles.sum}>
          <div>รวมทั้งหมด</div>
          <div>{cartState.totalQty}</div>
          <div>ใบ</div>
        </div>
        <div className={styles.sum}>
          <div>ยอดรวม</div>
          <div>{cartState.totalPrice}</div>
          <div>บาท</div>
        </div>
        <div className={styles.sum}>
          <div>ส่วนลด</div>
          <div>0</div>
          <div>บาท</div>
        </div>
        <div className={[styles.sum, styles.total].join(" ")}>
          <div>ยอดรวมทั้งสิ้น</div>
          <div>{cartState.totalPrice}</div>
          <div>บาท</div>
        </div>
        <Button color="primary" full>
          ชำระเงิน
        </Button>
      </div>
    </div>
  );
};

export default Summary;
