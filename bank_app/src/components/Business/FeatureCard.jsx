import React from 'react'
import styles from '../../style'

const FeatureCard = ({ features, icon, title, content, index }) => (
    <div className={`flex-row flex p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
            <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='font-poppins text-white font-semibold text-[18px] leading-[23px] mb-1'>
                {title}
            </h4>
            <p className='font-poppins text-dimWhite font-normal text-[16px] leading-[24px] mb-1'>
                {content}
            </p>
        </div>
    </div>
)

export default FeatureCard