import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client) => (
                <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
                    <img className='sm:w-[192px] w-[100px] object-contain hover:fill-white' src={client.logo} alt="client" />
                </div>
            ))}
        </div>
    </section >
)

export default Clients