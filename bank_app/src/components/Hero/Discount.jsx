import React from 'react'
import styles from '../../style'
import { discount } from '../../assets'

const Discount = () => {
    return (
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
            <img
                src={discount}
                alt="discount"
                className='w-[32px] h-[32px]'
            />
            <p className={`${styles.paragraph} ml-2 uppercase`}>
                <span className='text-white'>20%</span> Discount for <span className='text-white'>1 month</span>  account
            </p>
        </div>
    )
}

export default Discount