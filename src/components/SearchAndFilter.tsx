import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store'
import { setSearchTerm, setFoodType } from '../store/foodTrucksSlice'

const SearchAndFilter: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { searchTerm, foodType } = useSelector((state: RootState) => state.foodTrucks)

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(event.target.value))
    }

    const handleFoodTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFoodType(event.target.value))
    }

    return (
        <div className='bg-ffaltyellow p-4 flex space-x-4'>
            <input
                className='bg-transparent outline-none border-b border-b-ffgreen grow'
                type="text"
                placeholder="Search food trucks..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <select className='font-bold bg-transparent outline-none' value={foodType} onChange={handleFoodTypeChange}>
                <option value="">All Food Types</option>
                <option value="tacos">Tacos</option>
                <option value="burgers">Burgers</option>
                <option value="sandwiches">Sandwiches</option>
                <option value="hot dogs">Hot Dogs</option>
            </select>
        </div>
    )
}

export default SearchAndFilter
