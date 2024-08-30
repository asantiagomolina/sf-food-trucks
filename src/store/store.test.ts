import { FoodTruck, FoodTrucksState } from '../types'
import foodTrucksReducer, {
    selectTruck,
    setSearchTerm,
    setFoodType,
} from './foodTrucksSlice'
import { describe, it, expect } from 'vitest'

describe('foodTrucks reducer', () => {
    const initialState: FoodTrucksState = {
        foodTrucks: [],
        filteredFoodTrucks: [],
        status: 'idle',
        error: null,
        selectedTruckId: null,
        searchTerm: '',
        foodType: '',
    }

    it('should handle initial state', () => {
        expect(foodTrucksReducer(undefined, { type: 'unknown' })).toEqual(initialState)
    })

    it('should handle selectTruck', () => {
        const actual = foodTrucksReducer(initialState, selectTruck('123'))
        expect(actual.selectedTruckId).toEqual('123')
    })

    it('should handle setSearchTerm', () => {
        const actual = foodTrucksReducer(initialState, setSearchTerm('taco'))
        expect(actual.searchTerm).toEqual('taco')
    })

    it('should handle setFoodType', () => {
        const actual = foodTrucksReducer(initialState, setFoodType('burger'))
        expect(actual.foodType).toEqual('burger')
    })

    it('should filter trucks based on search term', () => {
        const state: FoodTrucksState = {
            ...initialState,
            foodTrucks: [
                { objectid: '1', applicant: 'Taco Truck', fooditems: 'Tacos' } as FoodTruck,
                { objectid: '2', applicant: 'Burger Van', fooditems: 'Burgers' } as FoodTruck,
            ],
        }
        const actual = foodTrucksReducer(state, setSearchTerm('taco'))
        expect(actual.filteredFoodTrucks).toHaveLength(1)
        expect(actual.filteredFoodTrucks[0].applicant).toEqual('Taco Truck')
    })

    it('should filter trucks based on food type', () => {
        const state: FoodTrucksState = {
            ...initialState,
            foodTrucks: [
                { objectid: '1', applicant: 'Taco Truck', fooditems: 'Tacos' } as FoodTruck,
                { objectid: '2', applicant: 'Burger Van', fooditems: 'Burgers' } as FoodTruck,
            ],
        }
        const actual = foodTrucksReducer(state, setFoodType('burger'))
        expect(actual.filteredFoodTrucks).toHaveLength(1)
        expect(actual.filteredFoodTrucks[0].applicant).toEqual('Burger Van')
    })
})
