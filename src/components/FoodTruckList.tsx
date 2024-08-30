import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import { selectTruck } from '../store/foodTrucksSlice'
import FoodTruckCard from './FoodTruckCard'
import { Tooltip } from 'react-tooltip'
import FoodTruckDetails from './FoodTruckDetails'

const FoodTruckList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { filteredFoodTrucks, selectedTruckId } = useSelector((state: RootState) => state.foodTrucks)

    const handleTruckSelect = (truckId: string) => {
        dispatch(selectTruck(truckId))
    }

    return (
        <div className='flex-1 flex-col p-4'>
            <h2 className='text-3xl font-bold mb-8 text-ffred'>Food Trucks</h2>
            <span className='block font-semibold text-md text-black p-2 mb-4'>There are <strong>{filteredFoodTrucks.length}</strong> foodtrucks available</span>
            <ul className='flex gap-2 flex-wrap justify-evenly'>
                {filteredFoodTrucks.map((truck) => (
                    <li
                        className='h-fit w-fit'
                        data-tooltip-id={`tooltip-${truck.objectid}`}
                        key={truck.objectid}
                        onClick={() => handleTruckSelect(truck.objectid)}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: truck.objectid === selectedTruckId ? '#e0e0e0' : 'transparent'
                        }}
                    >
                        <FoodTruckCard truck={truck} />
                        <Tooltip id={`tooltip-${truck.objectid}`} openOnClick>
                            <FoodTruckDetails />
                        </Tooltip>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FoodTruckList
