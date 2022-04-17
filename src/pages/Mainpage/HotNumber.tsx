import React, { Suspense, useEffect } from "react";
import LotteryItem from "../../components/Card/LotteryItem";
import LoadingPage from "../../components/Loading/LoadingPage";
import { useAppDispatch, useAppSelector } from "../../hook";
import { allLottery } from "../../store/slices/bestseller";
import styles from "./HotNumber.module.scss";

const HotNumber = () => {
  const dispatch = useAppDispatch();
  const baseSeller = useAppSelector((state) => state.bestSeller);

  useEffect(() => {
    dispatch(allLottery());
  }, []);

  return (
    <Suspense fallback={<LoadingPage />} >
      <div className={["container", styles.HotNumber].join(" ")}>
        <h2>เลขเด็ดขายดี</h2>
        <div className={styles.LoteryList}>
          {baseSeller.all_items.map((item: any, index: number) => {
            return <LotteryItem key={index} {...item} />;
          })}
        </div>
      </div>
    </Suspense>
  );
};

export default HotNumber;
