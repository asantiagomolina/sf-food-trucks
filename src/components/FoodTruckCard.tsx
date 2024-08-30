import React from 'react'
import { FoodTruckCardProps } from '../types'

const FoodTruckCard: React.FC<FoodTruckCardProps> = ({ truck }) => {

    return (
        <div className='flex flex-col rounded overflow-hidden shrink-0 shadow-lg size-80 bg-ffwhite border border-ffyellow hover:border-ffgreen'>
            <h3 className='font-bold bg-ffgreen text-black text-xl p-4 truncate text-ellipsis'>{truck.applicant}</h3>
            <div>

            </div>
            <div className='px-4 py-2'>
                <h4 className='font-bold'>Address</h4>
                <p className=' font-semibold'>{truck.address}</p>
            </div>
            <div className='px-4 py-2'>
                <h4 className='font-bold'>Description</h4>
                <p className=' font-semibold'>{truck.fooditems}</p>
            </div>
        </div>
    )
}

export default FoodTruckCard
