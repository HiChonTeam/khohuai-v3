import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hook';
import bestseller from '../../store/slices/bestseller';
import styles from './HotNumber.module.scss';


const HotNumber = () => {

  const dispatch = useAppDispatch();
  const baseSeller = useAppSelector((state) => state.bestSeller);


  return (
    <div className={['container', styles.HotNumber].join(' ')} >
      <h2>กำลังหมด</h2>
      {
        baseSeller.data.map((item, index) => { 
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