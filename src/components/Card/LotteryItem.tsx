import { FC } from "react";
import Button from "../Button/index";
import styles from "./LotteryItem.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAppDispatch } from "../../hook";
import { increaseToCart } from "../../store/slices/cart";

interface ItemProps {
  number: string;
  qty: number;
  rating: number;
  status: string;
  img: string;
}

const LotteryItem: FC<ItemProps> = ({ number, qty, img }) => {

  const dispatch = useAppDispatch();

  const handleAddItem = (number: string) => { 
    dispatch(increaseToCart(number));
  }

  return (
    <div className={styles.Item}>
      <div className={styles.Image}>
        <LazyLoadImage
          alt={number}
          src={img}
          height={140}
          effect="blur"
          threshold={500}
        />
        <div className={styles.Qty}>คงเหลือ {qty} ใบ</div>
      </div>
      <div>
        <Button full onClick={() => handleAddItem(number)}>เพิ่มลงในตะกร้า</Button>
      </div>
    </div>
  );
};

export default LotteryItem;
