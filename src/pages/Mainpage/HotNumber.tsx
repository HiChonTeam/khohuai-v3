import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import bestseller from '../../store/slices/bestseller';
import styles from './HotNumber.module.scss';


const HotNumber: FC = () => {

  const dispatch = useAppDispatch();
  const baseSeller = useAppSelector((state) => state.bestSeller);


  return (
    <div className={['container', styles.HotNumber].join(' ')} >
      <h2>กำลังหมด</h2>
      {
        baseSeller.data.map((item:any, index: number) => { 
          return (
            <div key={index}>
              {
                item.number
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default HotNumber