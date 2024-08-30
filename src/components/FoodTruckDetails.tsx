import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import FoodTruckRating from './FoodTruckRating'

const FoodTruckDetails: React.FC = () => {
    const { foodTrucks, selectedTruckId } = useSelector((state: RootState) => state.foodTrucks)

    const selectedTruck = foodTrucks.find(truck => truck.objectid === selectedTruckId)

    if (!selectedTruck) {
        return null
    }

    return (
        <div className="food-truck-details">
            <h2 className='text-2xl'>{selectedTruck.applicant}</h2>
            <FoodTruckRating name={selectedTruck.applicant} latitude={selectedTruck.latitude} longitude={selectedTruck.longitude} />
            <p><strong>Facility Type:</strong> {selectedTruck.facilitytype}</p>
            <p><strong>Food Items:</strong> {selectedTruck.fooditems}</p>
            <p><strong>Address:</strong> {selectedTruck.address}</p>
            <p><strong>Location:</strong> {selectedTruck.locationdescription}</p>
        </div>
    )
}

export default FoodTruckDetails
