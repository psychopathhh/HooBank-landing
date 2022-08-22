import React from 'react'
import { robot } from '../../assets'
import styles from '../../style'

const RobotHand = () => {
    return (
        <div className={`relative flex-1 flex ${styles.flexCenter} md:my-0 my-10`}>
            <img src={robot} alt="billing" className="w-[100%] h-[100%] object-contain relative z-[5]" />

            {/* gradient start */}
            <div className="min-w-[320px] absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="min-w-[320px] absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-20" />
            <div className="min-w-[320px] absolute z-[0] w-[50%] h-[50%] bottom-10 blue__gradient" />
            {/* gradient end */}
        </div>
    )
}

export default RobotHand