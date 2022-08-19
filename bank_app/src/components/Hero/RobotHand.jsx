import React from 'react'
import { robot } from '../../assets'
import styles from '../../style'

const RobotHand = () => {
    return (
        <div className={`relative flex-1 flex ${styles.flexCenter} md:my-0 my-10`}>
            <img src={robot} alt="billing" className="w-[100%] h-[100%] object-contain relative z-[5]" />

            {/* gradient start */}
            <div className=" min-w-[520px] absolute z-[0] w-[100%] h-[40%] top-0 pink__gradient" />
            <div className=" min-w-[520px] absolute z-[1] w-[40%] h-[60%] rounded-full white__gradient bottom-20" />
            <div className=" min-w-[520px] absolute z-[0] w-[60%] h-[80%] bottom-10 blue__gradient" />
            {/* gradient end */}
        </div>
    )
}

export default RobotHand